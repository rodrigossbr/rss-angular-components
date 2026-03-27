# rss-angular-components 🧪

This is a monorepo workspace developed in **Angular 21**, designed as a technical lab for creating high-performance reusable libraries and components. The project uses the most modern practices of the Angular ecosystem to ensure scalability and maintainability.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## 📚 Available Libraries

| Library | Version | NPM | Description |
| :--- |:--------| :--- | :--- |
| **`rss-state-store`** | `1.0.1` | [![npm](https://img.shields.io/badge/npm-@rssbr/state--store-cb3837?style=flat-square&logo=npm)](https://www.npmjs.com/package/@rssbr/state-store) | Reactive state management with automatic persistence, compatible with Angular 13+. |

## 📂 Workspace Structure

The project is organized to separate infrastructure libraries from demonstration applications:

### 🏗️ Libraries (`/projects`)
* **`rss-state-store`**: Core library for reactive state management available in the `@rssbr` scope.

### 🖥️ Demo Application (`/src/app`)
* **`pages/`**: Pages dedicated to testing functionalities in real-time.
  * `state-store-page`: Practical demonstration of the state library.
  * `home-page` / `welcome-page`: Initial navigation interfaces.
* **`shared/`**: Reusable support components within the demo, such as `json-section`.

---

## 🛠️ Core Technologies

* **Angular 21**: Using the latest features like *Standalone Components* and the new *Control Flow* (`@if`, `@for`).
* **Vitest**: Next-generation testing framework, offering ultra-fast execution.
* **RxJS**: Management of asynchronous streams and reactive states.
* **SCSS**: Modular and advanced styling.

---

## 🚀 Running the Application

Use the commands below to manage the workspace through the terminal:

### Main Project (Demo)
  ```bash
     # Start the development server for the demo app
     npm start
  ```

## 🧪 Quality and Testing

Code quality is ensured through Vitest, which is the testing standard for this workspace.

  ```bash
  # Run all project tests
  npm test 
  ```

<div align="center">
  <hr>
  <p>Developed with 💻 and ☕ by <strong>Rodrigo S. Santos</strong></p>
  <img src="https://img.shields.io/badge/Location-Imbé%2C%20RS-blue?style=flat-square&logo=googlemaps&logoColor=white" alt="Location">
  <a href="mailto:rodrigoss.br%40gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Email-rodrigoss.br%40gmail.com-green?style=flat-square&logo=gmail&logoColor=white" alt="Email">
  </a>
  <p>© 2026 All rights reserved.</p>
</div>
