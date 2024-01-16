import { describe, expect, it } from '@jest/globals';
import { getCityPriceList } from './tariffs';

describe('getCityPriceList', () => {
  it('test getCityPriceList', () => {
    expect(getCityPriceList(['200', '300', '400'])).toStrictEqual([
      '200р/',
      '300р/',
      '400р',
    ]);
  });
});
