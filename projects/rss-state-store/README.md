# @rss-state-store 🚀

![npm version](https://img.shields.io/badge/version-1.2.1-blue)

A lightweight and reactive library for state management in Angular 13+, focused on automatic persistence and simplicity.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📋 Features

- **Reactivity with RxJS:** Based on `ReplaySubject` to ensure new subscribers receive the latest state.
- **Automatic Persistence:** Native support for `localStorage` and `sessionStorage`.
- **Key Prefixing:** Prevents data collision between different applications or modules.
- **Fully Typed:** Developed in TypeScript for maximum compile-time safety.
- **Tested with Vitest:** High performance and reliability in unit tests.

## ⚙️ Installation (Local Usage)

In your main project, import via the path mapped in `tsconfig.json`:

```typescript
import { StateStoreService } from 'rss-state-store';
```

## 🚀 How to Use

### 1. Define Your State Model
Create an interface that represents the data you want to store.

```typescript
export interface UserSettings {
  theme: 'light' | 'dark';
  username: string;
  notificationsEnabled: boolean;
}
```

### 2. Create Your Store
Extend the `StateStoreService` class and implement the `initialState()` method.

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
      username: 'Guest',
      notificationsEnabled: true
    };
  }

  // Custom methods for your business logic
  public toggleTheme(): void {
    const newTheme = this.getState().theme === 'light' ? 'dark' : 'light';
    this.updatePartialState({ theme: newTheme });
  }
}
```

### 3. Use in a Component
Use Angular's new Control Flow (`@if`) and the `async` pipe.

```html
@if (settingsStore.state$ | async; as settings) {
  <div [class.dark]="settings.theme === 'dark'">
    <h1>Hello, {{ settings.username }}!</h1>
    <button (click)="settingsStore.toggleTheme()">Toggle Theme</button>
  </div>
}
```

## 🛠️ Main API

### `StateStoreService<T>`

| Method | Description |
| :--- | :--- |
| `state$` | Observable that reactively emits the current state. |
| `getState()` | Returns a synchronous snapshot of the current state. |
| `updateState(newState)` | Replaces the entire state. |
| `updatePartialState(partial)` | Merges the current state with new properties (Merge). |
| `resetState()` | Resets the store to the value defined in `initialState`. |
| `setCustomKey(key)` | Dynamically changes the persistence key (e.g., user ID). |


<div align="center">
  <hr>
  <p>Developed with 💻 and ☕ by <strong>Rodrigo S. Santos</strong></p>
  <img src="https://img.shields.io/badge/Location-Imbé%2C%20RS-blue?style=flat-square&logo=googlemaps&logoColor=white" alt="Location">
  <a href="mailto:rodrigoss.br%40gmail.com" target="_blank">
    <img src="https://img.shields.io/badge/Email-rodrigoss.br%40gmail.com-green?style=flat-square&logo=gmail&logoColor=white" alt="Email">
  </a>
  <p>© 2026 All rights reserved.</p>
</div>
