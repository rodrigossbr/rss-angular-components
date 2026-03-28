/**
 * @class StorageService
 * @description Serviço utilitário para manipulação de Storage (Local e Session) do navegador.
 * Fornece uma camada de abstração com suporte a prefixos para evitar colisão de chaves.
 */
export class StorageService {
  /** @private Armazena a instância do storage selecionado (localStorage ou sessionStorage). */
  private readonly storage: Storage;

  /** @private Prefixo aplicado a todas as chaves gerenciadas por esta instância. */
  private readonly prefix: string;

  /**
   * @constructor
   * @param {string} prefix O prefixo a ser utilizado em todas as chaves (ex: 'app-nome').
   * @param {boolean} useLocalStorage Define se deve usar localStorage (true) ou sessionStorage (false). Padrão: false.
   */
  public constructor(prefix: string, useLocalStorage: boolean = false) {
    this.prefix = prefix;
    this.storage = useLocalStorage ? localStorage : sessionStorage;
  }

  /**
   * @method setItem
   * @description Armazena um item no storage. O valor é automaticamente convertido para JSON.
   * @template T O tipo do valor a ser armazenado.
   * @param {string} key A chave identificadora do item.
   * @param {T} value O valor a ser armazenado (objeto, array, string, etc).
   */
  public setItem<T>(key: string, value: T): void {
    const fullKey = this.getKey(key);
    const stringValue = JSON.stringify(value);
    this.storage.setItem(fullKey, stringValue);
  }

  /**
   * @method getItem
   * @description Recupera um item do storage e realiza o parse do JSON para o tipo original.
   * @template T O tipo esperado do valor a ser retornado.
   * @param {string} key A chave identificadora do item.
   * @returns {T | null} O valor convertido para o tipo T ou null caso não exista.
   */
  public getItem<T>(key: string): T | null {
    const fullKey = this.getKey(key);
    const value = this.storage.getItem(fullKey);
    return value ? (JSON.parse(value) as T) : null;
  }

  /**
   * @method getKeys
   * @description Retorna todas as chaves presentes no storage que possuem o prefixo definido nesta instância.
   * @returns {string[]} Array de chaves (strings) filtradas pelo prefixo.
   */
  public getKeys(): string[] {
    return Object.keys(this.storage).filter((key) => {
      return key.startsWith(this.prefix);
    });
  }

  /**
   * @method removeItem
   * @description Remove um item específico do storage utilizando a chave e o prefixo.
   * @param {string} key A chave do item a ser removido.
   */
  public removeItem(key: string): void {
    const fullKey = this.getKey(key);
    this.storage.removeItem(fullKey);
  }

  /**
   * @method clear
   * @description Remove todos os itens do storage que começam com o prefixo definido nesta instância.
   * Útil para limpar o estado de um módulo específico sem afetar outros dados do domínio.
   */
  public clear(): void {
    Object.keys(this.storage).forEach((key) => {
      if (key.startsWith(this.prefix)) {
        this.storage.removeItem(key);
      }
    });
  }

  /**
   * @method clearAllStorages
   * @description Método destrutivo que limpa completamente o localStorage e sessionStorage do navegador.
   * @warning Use com cautela, pois apaga dados de todos os prefixos e aplicações no mesmo domínio.
   */
  public clearAllStorages(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  /**
   * @private
   * @method getKey
   * @description Gera a chave completa concatenando o prefixo e a chave fornecida.
   * @param {string} key Chave base.
   * @returns {string} Chave formatada como `prefixo:chave`.
   */
  private getKey(key: string): string {
    return `${this.prefix}:${key}`;
  }
}
