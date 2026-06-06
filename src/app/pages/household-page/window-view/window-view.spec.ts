import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowView } from './window-view';

describe('WindowView', () => {
  let component: WindowView;
  let fixture: ComponentFixture<WindowView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
