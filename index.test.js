import { checkCat, sum } from './index';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('ねこテスト', () => {
  expect(checkCat('イリオモテヤマネコ')).toEqual(ture);
  expect(checkCat('猫の手も借りたい')).toEqual(ture);
  expect(checkCat('concat')).toEqual(ture);
});
