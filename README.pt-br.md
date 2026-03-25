# rss-angular-components 🧪

Este é um workspace monorepo desenvolvido em **Angular 21**, projetado como um laboratório técnico para a criação de bibliotecas e componentes reutilizáveis de alta performance. O projeto utiliza as práticas mais modernas do ecossistema Angular para garantir escalabilidade e manutenibilidade.

![Angular](https.img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https.img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https.img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## 📚 Bibliotecas Disponíveis

| Biblioteca | Versão  | NPM | Descrição |
| :--- |:--------| :--- | :--- |
| **`rss-state-store`** | `0.0.5` | [![npm](https.img.shields.io/badge/npm-@rssbr/state--store-cb3837?style=flat-square&logo=npm)](https://www.npmjs.com/package/@rssbr/state-store) | Gerenciamento de estado reativo com persistência automática. |

## 📂 Estrutura do Workspace

O projeto está organizado para separar as bibliotecas de infraestrutura das aplicações de demonstração:

### 🏗️ Bibliotecas (`/projects`)
* **`rss-state-store`**: Biblioteca core para gerenciamento de estado reativo disponível no escopo `@rssbr`.

### 🖥️ Aplicação de Demo (`/src/app`)
* **`pages/`**: Páginas dedicadas a testar as funcionalidades em tempo real.
  * `state-store-page`: Demonstração prática da biblioteca de estado.
  * `home-page` / `welcome-page`: Interfaces de navegação inicial.
* **`shared/`**: Componentes de suporte reutilizáveis dentro da demo como o `json-section`.

---

## 🛠️ Tecnologias Principais

* **Angular 21**: Utilizando as últimas novidades como *Standalone Components* e o novo *Control Flow* (`@if`, `@for`).
* **Vitest**: Framework de testes de próxima geração, oferecendo execução ultrarrápida.
* **RxJS**: Gerenciamento de fluxos assíncronos e estados reativos.
* **SCSS**: Estilização modular e avançada.

---

## 🚀 Executando a Aplicação

Utilize os comandos abaixo para gerenciar o workspace através do terminal:

### Projeto Principal (Demo)
  ```bash
     # Iniciar o servidor de desenvolvimento do app de demo
     npm start
  ```

## 🧪 Qualidade e Testes

A qualidade do código é garantida através do Vitest, que é o padrão de testes deste workspace.

  ```bash
  # Executar todos os testes do projeto
  npm test 
  ```

<div align="center">
  <hr>
  <p>Desenvolvido com 💻 e ☕ por <strong>Rodrigo S. Santos</strong></p>
  <img src="https://img.shields.io/badge/Local-Imbé%2C%20RS-blue?style=flat-square&logo=googlemaps&logoColor=white" alt="Local">
  <a href="mailto:rodrigoss.br%40gmail.com" target="_blank">
    <img src="https.img.shields.io/badge/Email-rodrigoss.br%40gmail.com-green?style=flat-square&logo=gmail&logoColor=white" alt="Email">
  </a>
  <p>© 2026 Todos os direitos reservados.</p>
</div>
