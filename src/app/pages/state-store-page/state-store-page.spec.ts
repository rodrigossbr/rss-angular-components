import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateStorePage } from './state-store-page';

describe('StateStorePage', () => {
  let component: StateStorePage;
  let fixture: ComponentFixture<StateStorePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateStorePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateStorePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
