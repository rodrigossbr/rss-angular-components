import {Component, inject} from '@angular/core';
import {UserSettingsStore} from './stores/user-settings.store';
import {AsyncPipe, JsonPipe, NgClass, TitleCasePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-state-store-page',
  imports: [
    TitleCasePipe,
    FormsModule,
    JsonPipe,
    NgClass,
    AsyncPipe
  ],
  templateUrl: './state-store-page.html',
  styleUrl: './state-store-page.scss',
})
export class StateStorePage {
  public settingsStore: UserSettingsStore = inject(UserSettingsStore);
}
