import { DollarAmountPipe } from './dollar-amount-pipe';

describe('DollarAmountPipe', () => {
  it('create an instance', () => {
    const pipe = new DollarAmountPipe();
    expect(pipe).toBeTruthy();
  });
});
