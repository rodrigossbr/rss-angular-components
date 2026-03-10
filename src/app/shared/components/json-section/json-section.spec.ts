import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonSection } from './json-section';

describe('JsonSection', () => {
  let component: JsonSection;
  let fixture: ComponentFixture<JsonSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JsonSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
