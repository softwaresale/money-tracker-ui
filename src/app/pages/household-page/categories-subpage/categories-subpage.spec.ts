import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesSubpage } from './categories-subpage';

describe('CategoriesSubpage', () => {
  let component: CategoriesSubpage;
  let fixture: ComponentFixture<CategoriesSubpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesSubpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesSubpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
