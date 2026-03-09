import { TestBed } from '@angular/core/testing';

import { UserSettingsStore } from './user-settings.store';

describe('UserSettingsStore', () => {
  let service: UserSettingsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSettingsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
