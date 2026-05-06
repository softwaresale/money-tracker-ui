import { BasePage } from './base-page';

describe('BasePage', () => {
  it('should create an instance', () => {
    const directive = new BasePage();
    expect(directive).toBeTruthy();
  });
});
