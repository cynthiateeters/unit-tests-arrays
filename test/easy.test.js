/* easy.test.js */

const {
  addToStart,
  makeArrayCopy,
  getLastElement,
  getEvens,
  rotateClockwise,
  checkIfHigher,
  checkFactors,
  findIndex,
  countDown,
} = require('../src/easy');

test('pass a number to add to the start of an array', () => {
  expect(addToStart(123, [8,44,33])).toEqual([123,8,44,33]);
});

test('return a copy of an array', () => {
  expect(makeArrayCopy(['a','b','c'])).toEqual(['a','b','c']);
});

test('take off last element and return string', () => {
  const arr = ['a', 'b', 'c'];
  const str = getLastElement(arr);
  
  expect(arr).toEqual(['a', 'b']);
  expect(str).toBe("Array element was in position 2 and was value c");
});

test('return a copy of an array only with even vals', () => {
  expect(getEvens([1,4,88,3,91,62])).toEqual([4,88,62]);
});

test('return a copy of clockwise rotated array', () => {
  expect(rotateClockwise(['a','b','c','d'])).toEqual(['d','a','b','c']);
});

test('return true if an element is >= num', () => {
  expect(checkIfHigher(7, [2,3,4,6,12])).toBe(true);
});

test('return false if an element is >= num', () => {
  expect(checkIfHigher(55, [2,3,4,6,12])).toBe(false);
});


test('return true if all elements are factors of num', () => {
  expect(checkFactors(24, [2,3,4,6,12])).toBe(true);
});

test('return false if not all elements are factors of num', () => {
  expect(checkFactors(24, [2,3,5,6,12])).toBe(false);
});

test('return first index of string in array', () => {
  let str = 'I\'m the one';
  let arr = ['a', 'b', str, 'c', 'd', str];
  expect(findIndex(str, arr)).toBe(2);
});

test('return null when string not in array', () => {
  let str = 'I\'m the one';
  let arr = ['a', 'b', 'c', 'd'];
  expect(findIndex(str, arr)).toBe(null);
});

test('pass a positive number and return an array that counts down from that', () => {
  expect(countDown(5)).toEqual([5,4,3,2,1,0]);
});

test('pass a positive number and return an array that counts down from that', () => {
  expect(countDown(0)).toEqual([0]);
});
