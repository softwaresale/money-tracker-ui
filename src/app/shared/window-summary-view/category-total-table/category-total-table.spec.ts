import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryTotalTable } from './category-total-table';

describe('CategoryTotalTable', () => {
  let component: CategoryTotalTable;
  let fixture: ComponentFixture<CategoryTotalTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryTotalTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryTotalTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
