import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategorySubpage } from './create-category-subpage';

describe('CreateCategorySubpage', () => {
  let component: CreateCategorySubpage;
  let fixture: ComponentFixture<CreateCategorySubpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCategorySubpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCategorySubpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
