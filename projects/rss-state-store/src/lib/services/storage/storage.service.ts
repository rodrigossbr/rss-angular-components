/**
 * Serviço utilitário para manipulação de Storage (Local e Session) do navegador.
 * Fornece uma camada de abstração com suporte a prefixos para evitar colisão de chaves.
 */
export class StorageService {
  /** Armazena a instância do storage selecionado (localStorage ou sessionStorage). */
  private readonly storage: Storage;

  /** Prefixo aplicado a todas as chaves gerenciadas por esta instância. */
  private readonly prefix: string;

  /**
   * Cria uma nova instância do StorageService.
   * @param prefix O prefixo a ser utilizado em todas as chaves (ex: 'app-nome').
   * @param useLocalStorage Define se deve usar localStorage (true) ou sessionStorage (false). Padrão: false.
   */
  public constructor(prefix: string, useLocalStorage: boolean = false) {
    this.prefix = prefix;
    this.storage = useLocalStorage ? localStorage : sessionStorage;
  }

  /**
   * Armazena um item no storage. O valor é automaticamente convertido para JSON.
   * @param key A chave identificadora do item.
   * @param value O valor a ser armazenado (objeto, array, string, etc).
   */
  public setItem<T>(key: string, value: T): void {
    const fullKey = this.getKey(key);
    const stringValue = JSON.stringify(value);
    this.storage.setItem(fullKey, stringValue);
  }

  /**
   * Recupera um item do storage e realiza o parse do JSON para o tipo original.
   * @param key A chave identificadora do item.
   * @returns O valor convertido para o tipo T ou null caso não exista.
   */
  public getItem<T>(key: string): T | null {
    const fullKey = this.getKey(key);
    const value = this.storage.getItem(fullKey);
    return value ? (JSON.parse(value) as T) : null;
  }

  /**
   * Retorna todas as chaves presentes no storage que possuem o prefixo definido nesta instância.
   * @returns Array de chaves (strings) filtradas pelo prefixo.
   */
  public getKeys(): string[] {
    return Object.keys(this.storage).filter((key) => {
      return key.startsWith(this.prefix);
    });
  }

  /**
   * Remove um item específico do storage utilizando a chave e o prefixo.
   * @param key A chave do item a ser removido.
   */
  public removeItem(key: string): void {
    const fullKey = this.getKey(key);
    this.storage.removeItem(fullKey);
  }

  /**
   * Remove todos os itens do storage que começam com o prefixo definido nesta instância.
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
   * Método destrutivo que limpa completamente o localStorage e sessionStorage do navegador.
   * @warning Use com cautela, pois apaga dados de todos os prefixos e aplicações no mesmo domínio.
   */
  public clearAllStorages(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  /**
   * Gera a chave completa concatenando o prefixo e a chave fornecida.
   * @param key Chave base.
   * @returns Chave formatada como `prefixo:chave`.
   */
  private getKey(key: string): string {
    return `${this.prefix}:${key}`;
  }
}
