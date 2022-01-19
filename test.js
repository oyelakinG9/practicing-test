const total = require('./sum.js');

test('count through the string', () => {
  expect(total('')).toBe(14);
});