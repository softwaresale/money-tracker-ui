import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Percentages } from './percentages';

describe('Percentages', () => {
  let component: Percentages;
  let fixture: ComponentFixture<Percentages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Percentages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Percentages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
