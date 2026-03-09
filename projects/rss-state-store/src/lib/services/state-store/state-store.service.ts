import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { OptionStateStore } from '../../models/option-state-store.model';
import { StorageService } from '../storage/storage.service';

/**
 * Classe base abstrata para gerenciamento de estado reativo com persistência automática.
 * Utiliza RxJS para prover um fluxo de dados imutável e StorageService para persistência no navegador.
 * * @template T O tipo da interface que define a estrutura do estado.
 */
@Injectable()
export abstract class StateStoreService<T> {
  /** Observable interno que expõe o fluxo do estado. */
  private stateStore$: Observable<T | undefined>;

  /** Snapshot atual do estado em memória. */
  private valueState!: T;

  /** Subject que orquestra as emissões de novos estados para os inscritos. */
  private stateSubject: ReplaySubject<T>;

  /** Chave customizável usada para segmentar o storage (ex: IDs de usuários diferentes). */
  private customStorageKey: string = '';

  private readonly prefixKey: string;
  private readonly storageKey: string;
  private readonly storageService: StorageService;

  /** Configurações de comportamento da store. */
  private readonly stateOptions: OptionStateStore = {
    useLocalStorage: false,
    initialEmit: true,
  };

  /**
   * Inicializa a Store.
   * @param prefixKey Prefixo global para as chaves no Storage.
   * @param key Chave específica desta store.
   * @param options Opções de persistência e emissão inicial.
   */
  protected constructor(
    prefixKey: string,
    key: string,
    options: Partial<OptionStateStore> = {
      useLocalStorage: false,
      initialEmit: true,
    },
  ) {
    this.prefixKey = prefixKey;
    this.storageKey = key;
    this.stateOptions = { ...this.stateOptions, ...options };
    const { useLocalStorage, initialEmit } = this.stateOptions;

    this.storageService = new StorageService(this.prefixKey, useLocalStorage);
    this.stateSubject = new ReplaySubject<T>(1);
    this.stateStore$ = this.stateSubject.asObservable();

    if (initialEmit) {
      this.emitInitialState();
    }
  }

  /**
   * Define o estado inicial da store. Deve ser implementado pelas classes filhas.
   * @returns O objeto de estado inicial.
   */
  public abstract initialState(): T;

  /**
   * Define uma chave customizada para o storage, útil para salvar dados por contexto (ex: usuário logado).
   * @param key Nova chave customizada.
   */
  public setCustomKey(key: string): void {
    this.customStorageKey = key;
    this.emitInitialState();
  }

  /** @returns A chave customizada atual. */
  public getCustomKey(): string {
    return this.customStorageKey;
  }

  /**
   * Verifica se existe um estado salvo no storage para uma determinada chave customizada.
   * @param key A chave customizada a ser verificada.
   * @returns True se existir, False caso contrário.
   */
  public hasCustomKey(key: string): boolean {
    const customKey = this.prefixKey + ':' + key + ':' + this.storageKey;
    return this.storageService.getKeys().some((k) => k.includes(customKey));
  }

  /**
   * Substitui o estado atual por um novo estado completo.
   * @param newState O novo objeto de estado.
   * @param options Configuração de emissão (se deve avisar os inscritos da mudança).
   */
  public updateState(
    newState: T,
    options: { emit: boolean } = { emit: true },
  ): void {
    this.saveToStorage(newState);
    this.emitState(newState, options);
  }

  /**
   * Atualiza apenas propriedades específicas do estado atual.
   * Realiza um merge (shallow copy) entre o estado atual e as propriedades enviadas.
   * @param partialState Objeto contendo apenas as propriedades que devem ser alteradas.
   * @param options Configuração de emissão.
   */
  public updatePartialState(
    partialState: Partial<T>,
    options: { emit: boolean } = { emit: true },
  ): void {
    const currentState = this.valueState;
    const newState = { ...currentState, ...partialState };
    this.saveToStorage(newState);
    this.emitState(newState, options);
  }

  /**
   * Getter que expõe o estado como um Observable reativo.
   * Realiza um fallback para o valor em memória caso o stream emita undefined.
   */
  public get state$(): Observable<T | undefined> {
    return this.stateStore$.pipe(
      map((state) => state !== undefined ? state : this.valueState)
    );
  }

  /**
   * Retorna o snapshot atual do estado em memória de forma síncrona.
   * @returns O estado atual do tipo T.
   */
  public getState(): T {
    return this.valueState;
  }

  /**
   * Limpa todos os storages (local e session) do domínio.
   * @warning Método destrutivo global.
   */
  public clearAllStorages(): void {
    this.storageService.clearAllStorages();
  }

  /**
   * Redefine a store para o seu estado inicial definido em `initialState()`.
   * @param options Configuração de emissão.
   */
  public resetState(options: { emit: boolean } = { emit: true }): void {
    this.updateState(this.initialState(), options);
  }

  /** Tenta carregar dados do storage e emite para o subject. */
  private emitInitialState() {
    const storedState = this.loadFromStorage();
    this.valueState = storedState || this.initialState();
    this.stateSubject.next(this.valueState);
  }

  /** Emite o novo estado para os observadores caso a opção 'emit' seja verdadeira. */
  private emitState(newState: T, options: { emit: boolean }) {
    if (options.emit) {
      this.stateSubject.next(newState);
    }
  }

  /** Recupera o dado do StorageService. */
  private loadFromStorage(): T | null {
    return this.storageService.getItem(this.getStoreKey());
  }

  /** Persiste o dado em memória e no StorageService. */
  private saveToStorage(state: T): void {
    this.valueState = state;
    this.storageService.setItem(this.getStoreKey(), state);
  }

  /** Resolve a chave final de armazenamento considerando chaves customizadas. */
  private getStoreKey(): string {
    return this.customStorageKey
      ? `${this.customStorageKey}:${this.storageKey}`
      : this.storageKey;
  }
}
