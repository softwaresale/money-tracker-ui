import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettleView } from './settle-view';

describe('SettleView', () => {
  let component: SettleView;
  let fixture: ComponentFixture<SettleView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettleView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettleView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
