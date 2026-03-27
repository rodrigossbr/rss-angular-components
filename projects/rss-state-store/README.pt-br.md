# @rss-state-store 🚀

![npm version](https://img.shields.io/badge/version-1.2.0-blue)

Uma biblioteca leve e reativa para gerenciamento de estado no Angular 13+, focada em persistência automática e simplicidade.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📋 Características

- **Reatividade com RxJS:** Baseada em `ReplaySubject` para garantir que novos inscritos recebam o último estado.
- **Persistência Automática:** Suporte nativo para `localStorage` e `sessionStorage`.
- **Prefixação de Chaves:** Evita colisão de dados entre diferentes aplicações ou módulos.
- **Totalmente Tipada:** Desenvolvida em TypeScript para máxima segurança em tempo de compilação.
- **Testada com Vitest:** Alta performance e confiabilidade nos testes unitários.

## ⚙️ Instalação (Uso Local)

No seu projeto principal, importe através do path mapeado no `tsconfig.json`:

```typescript
import { StateStoreService } from 'rss-state-store';
```

## 🚀 Como usar

### 1. Defina o seu Modelo de Estado
Crie uma interface que represente os dados que você deseja armazenar.

```typescript
export interface UserSettings {
  theme: 'light' | 'dark';
  username: string;
  notificationsEnabled: boolean;
}
```

### 2. Crie a sua Store
Estenda a classe StateStoreService e implemente o método initialState().

```typescript
import { Injectable } from '@angular/core';
import { StateStoreService } from 'rss-state-store';

@Injectable({ providedIn: 'root' })
export class UserSettingsStore extends StateStoreService<UserSettings> {
  constructor() {
    super('rss-app', 'user-settings', { useLocalStorage: true });
  }

  public override initialState(): UserSettings {
    return {
      theme: 'light',
      username: 'Visitante',
      notificationsEnabled: true
    };
  }

  // Métodos customizados para sua regra de negócio
  public toggleTheme(): void {
    const newTheme = this.getState().theme === 'light' ? 'dark' : 'light';
    this.updatePartialState({ theme: newTheme });
  }
}
```

### 3. Utilize no Componente
Use o novo Control Flow do Angular (@if) e o pipe async.

```html
@if (settingsStore.state$ | async; as settings) {
  <div [class.dark]="settings.theme === 'dark'">
    <h1>Olá, {{ settings.username }}!</h1>
    <button (click)="settingsStore.toggleTheme()">Trocar Tema</button>
  </div>
}
```

## 🛠️ API Principal

### `StateStoreService<T>`

| Método | Descrição |
| :--- | :--- |
| `state$` | Observable que emite o estado atual reativamente. |
| `getState()` | Retorna o snapshot síncrono do estado atual. |
| `updateState(newState)` | Substitui o estado completo. |
| `updatePartialState(partial)` | Mescla o estado atual com as novas propriedades (Merge). |
| `resetState()` | Volta a store para o valor definido em `initialState`. |
| `setCustomKey(key)` | Altera a chave de persistência dinamicamente (ex: ID do usuário). |


<div align="center">
  <hr>
  <p>Desenvolvido com 💻 e ☕ por <strong>Rodrigo S. Santos</strong></p>
  <img src="https://img.shields.io/badge/Local-Imbé%2C%20RS-blue?style=flat-square&logo=googlemaps&logoColor=white" alt="Local">
  <a href="mailto:rodrigoss.br%40gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Email-rodrigoss.br%40gmail.com-green?style=flat-square&logo=gmail&logoColor=white" alt="Email">
  </a>
  <p>© 2026 Todos os direitos reservados.</p>
</div>
