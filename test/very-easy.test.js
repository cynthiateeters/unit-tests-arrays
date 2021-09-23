/* very-easy.test.js */

const {
  getFirstValue,
  getNthValue,
  makeArray
} = require('../src/very-easy');

test('return the first argument', () => {
  expect(getFirstValue([8,44,33,454])).toEqual(8);
});

test('return the nth argument', () => {
  expect(getNthValue(3, [8,44,33,454])).toEqual(454);
});


test('with arguments 2,3 return array [2,3]', () => {
  expect(makeArray(2, 3)).toEqual([2,3]);
});