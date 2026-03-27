# Changelog
Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
e este projeto adere ao [Versionamento Semântico](https://semver.org/lang/pt-BR/).

## [1.2.0] - 2026-03-27
### Adicionado
- Compatibilidade com Angular 13+ através de `peerDependencies` atualizadas.
- Relatório de cobertura de testes com Vitest.
- Script `update-readme:lib:rss-state-store` para automatizar a atualização de versões nos READMEs.
- Comando `test:coverage:open:rss-state-store` para abrir o relatório de cobertura HTML.
- Guia `CONTRIBUTING.md` para o processo de release.

### Alterado
- `vitest.config.ts` reestruturado para melhor compatibilidade e configuração de cobertura.
- `publish:lib:rss-state-store` no `package.json` para executar o script de atualização dos READMEs antes do publish.
- Workflow `.github/workflows/publish-lib.yml` para commitar e fazer push das alterações nos READMEs após o publish.
- Descrições nos READMEs principal e da biblioteca para refletir a compatibilidade com Angular 13+.

### Corrigido
- Erros de resolução de dependência (`ERESOLVE`) para `vitest` e `zone.js` usando `overrides`.
- Erros de configuração do Vitest (`defineWorkspace`, `coverage` no lugar errado, `setupFiles` incorreto).
- Erros de importação de `zone.js` e `@angular/platform-browser-dynamic/testing` no `test-setup.ts`.
- Teste `clearAllStorages` no `state-store.service.spec.ts` para espiar a instância correta do `StorageService`.
- Cobertura de código para o getter `state$` no `state-store.service.spec.ts`.

## [1.1.0] - 2026-03-26
### Adicionado
- Funcionalidade de documentação e publicação da biblioteca.
- Documentação inicial nos projetos.

### Alterado
- Scripts de publicação e arquivos relacionados para automação do processo.
- Atualizações nos READMEs para refletir o processo de publish automático.
- Documentação geral do projeto.

## [1.0.0] - 2026-03-06
### Adicionado
- Biblioteca `rss-state-store` para gerenciamento de estado.
- Documentação inicial da biblioteca.
- Aplicação modelo para demonstrações e exemplos.
- Commit inicial do projeto.
