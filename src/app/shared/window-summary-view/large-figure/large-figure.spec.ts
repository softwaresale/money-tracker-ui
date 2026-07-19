import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeFigure } from './large-figure';

describe('LargeFigure', () => {
  let component: LargeFigure;
  let fixture: ComponentFixture<LargeFigure>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargeFigure]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeFigure);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
