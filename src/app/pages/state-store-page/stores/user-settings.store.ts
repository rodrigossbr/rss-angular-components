import { Injectable } from '@angular/core';
import { StateStoreService } from 'rss-state-store';
import {UserSettings} from '../models/user-settings.model';

@Injectable({
  providedIn: 'root',
})
export class UserSettingsStore extends StateStoreService<UserSettings> {

  constructor() {
    // Passamos o Prefixo, a Chave e ligamos o LocalStorage
    super('rss-app', 'user-settings', { useLocalStorage: true });
  }

  // 2. Implementação obrigatória do estado inicial
  public override initialState(): UserSettings {
    return {
      theme: 'light',
      username: 'Visitante',
      notificationsEnabled: true
    };
  }

  // Você pode criar métodos helpers para facilitar a vida do componente
  public toggleTheme(): void {
    const currentTheme = this.getState().theme;
    this.updatePartialState({ theme: currentTheme === 'light' ? 'dark' : 'light' });
  }
}
