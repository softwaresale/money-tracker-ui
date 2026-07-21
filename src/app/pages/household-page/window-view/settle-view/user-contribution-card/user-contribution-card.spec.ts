import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContributionCard } from './user-contribution-card';

describe('UserContributionCard', () => {
  let component: UserContributionCard;
  let fixture: ComponentFixture<UserContributionCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserContributionCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserContributionCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
