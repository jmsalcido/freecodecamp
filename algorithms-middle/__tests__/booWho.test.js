const booWho = require('../booWho');

test('true is true', function() {
	expect(booWho(true)).toBe(true);
});

test('false is true', function() {
	expect(booWho(false)).toBe(true);
});

test('[1,2,3] is false', function() {
	expect(booWho([ 1, 2, 3 ])).toBe(false);
});

test('[].slice is false', function() {
	expect(booWho([].slice)).toBe(false);
});

test('1 is false', function() {
	expect(booWho(1)).toBe(false);
});

test('NaN is false', function() {
	expect(booWho(NaN)).toBe(false);
});

test('a is false', function() {
	expect(booWho('a')).toBe(false);
});

test('"true" is false', function() {
	expect(booWho('true')).toBe(false);
});

test('"false" is false', function() {
	expect(booWho('false')).toBe(false);
});