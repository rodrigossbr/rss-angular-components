/**
 * Interface de configuração para o comportamento do StateStoreService.
 */
export interface OptionStateStore {
  /**
   * Define o mecanismo de persistência.
   * - true: Utiliza localStorage (persistente mesmo após fechar o navegador).
   * - false: Utiliza sessionStorage (limpo ao fechar a aba).
   * @default false
   */
  useLocalStorage: boolean;

  /**
   * Define se a store deve emitir o estado atual imediatamente após a construção.
   * Útil para garantir que componentes recebam o valor carregado do storage logo no início.
   * @default true
   */
  initialEmit: boolean;
}
