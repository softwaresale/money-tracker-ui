import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdPage } from './household-page';

describe('HouseholdPage', () => {
  let component: HouseholdPage;
  let fixture: ComponentFixture<HouseholdPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseholdPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
