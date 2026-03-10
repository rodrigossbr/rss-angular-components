# rss-angular-components 🧪

Este é um workspace monorepo desenvolvido em **Angular 21**, projetado como um laboratório técnico para a criação de bibliotecas e componentes reutilizáveis de alta performance. O projeto utiliza as práticas mais modernas do ecossistema Angular para garantir escalabilidade e manutenibilidade.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)


## 📂 Estrutura do Workspace

O projeto está organizado para separar as bibliotecas de infraestrutura das aplicações de demonstração:

### 🏗️ Bibliotecas (`/projects`)
* **`rss-state-store`**: Biblioteca core para gerenciamento de estado reativo. Possui suporte nativo a persistência automática (Local/Session Storage) e fluxos de dados baseados em RxJS.

### 🖥️ Aplicação de Demo (`/src/app`)
* **`pages/`**: Páginas dedicadas a testar as funcionalidades em tempo real.
  * `state-store-page`: Demonstração prática da biblioteca de estado.
  * `home-page` / `welcome-page`: Interfaces de navegação inicial.
* **`shared/`**: Componentes de suporte reutilizáveis dentro da demo.

---

## 🛠️ Tecnologias Principais

* **Angular 21**: Utilizando as últimas novidades como *Standalone Components* e o novo *Control Flow* (`@if`, `@for`).
* **Vitest**: Framework de testes de próxima geração, oferecendo uma execução de unit tests significativamente mais rápida que o Karma/Jasmine.
* **RxJS**: Gerenciamento de fluxos assíncronos e estados reativos através de Observables.
* **SCSS**: Estilização modular e avançada.

---

## 🚀 Executando a Aplicação

Para desenvolver e testar o workspace localmente, utilize os seguintes comandos:

### Projeto Principal (Demo)
```bash
   # Iniciar o servidor de desenvolvimento do app de demo
   npm start
```

### Bibliotecas
```bash
   # Gerar o build da biblioteca rss-state-store
   npm run build:lib:rss-state-store
```

## 🧪 Qualidade e Testes

A qualidade do código é garantida através do **Vitest**, que é o padrão de testes deste workspace.

```bash
# Executar todos os testes do projeto
npm run test

# Executar testes apenas da biblioteca de estado
npm run test:lib:rss-state-store
```

<div align="center">
<p>Desenvolvido com 💻 e ☕ por <strong>Rodrigo Silveira dos Santos</strong></p>
<p>© 2026 Todos os direitos reservados.</p>
</div>
