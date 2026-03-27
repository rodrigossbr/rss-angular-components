# Guia de Contribuição e Release

Este documento descreve o processo para publicar uma nova versão da biblioteca `@rssbr/state-store`.

## Processo de Release

O processo é semi-automatizado. A sua única responsabilidade manual é atualizar o número da versão no `package.json` e criar a tag no Git. O resto é feito pela automação do GitHub Actions.

---

### Passo 1: Atualizar a Versão no `package.json`

Antes de tudo, decida qual será a nova versão seguindo o versionamento semântico (SemVer):

*   **MAJOR** (`1.x.x` -> `2.0.0`): Para mudanças que quebram a compatibilidade (breaking changes).
*   **MINOR** (`x.1.x` -> `x.2.0`): Para novas funcionalidades que não quebram a compatibilidade.
*   **PATCH** (`x.x.1` -> `x.x.2`): Para correções de bugs que não quebram a compatibilidade.

1.  Abra o arquivo: `projects/rss-state-store/package.json`.
2.  Altere a propriedade `version` para o novo número. Ex: `"version": "1.1.0"` -> `"version": "1.2.0"`.
3.  Salve o arquivo.

### Passo 2: Criar o Commit e a Tag no Git

1.  Adicione o `package.json` modificado e crie um commit:
    ```bash
    git add projects/rss-state-store/package.json
    git commit -m "release: v1.2.0" 
    # (Use a nova versão na mensagem do commit)
    ```

2.  Crie uma tag Git que **corresponda exatamente** à nova versão, prefixada com `v`:
    ```bash
    git tag v1.2.0
    ```

### Passo 3: Enviar para o GitHub

1.  Envie o commit e a tag para o repositório remoto:
    ```bash
    git push
    git push origin v1.2.0
    ```

### O que Acontece a Seguir (A Magia do CI/CD)

Ao enviar a nova tag para o GitHub, o workflow `publish-lib.yml` será acionado automaticamente e fará o seguinte:

1.  **Instala as dependências.**
2.  **Executa o script `publish:lib:rss-state-store`**, que por sua vez:
    *   Executa o script `update-readme:lib:rss-state-store` para atualizar a versão em todos os 4 arquivos `README.md`.
    *   Compila a biblioteca em modo de produção.
    *   Publica o pacote na NPM.
3.  **Cria um novo commit** com a mensagem `docs: Update README versions [skip ci]` contendo os `README.md` atualizados e o envia de volta para o seu repositório.

Pronto! A nova versão estará publicada e a documentação, atualizada.
