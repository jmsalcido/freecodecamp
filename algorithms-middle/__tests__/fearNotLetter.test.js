const fearNotLetter = require('../fearNotLetter');

test('abce returns d', function() {
    expect(fearNotLetter('abce')).toBe('d');
});

test('abcdefghjklmno returns i', function() {
    expect(fearNotLetter('abcdefghjklmno')).toBe('i');
});

test('bcd returns `undefined`', function() {
    expect(fearNotLetter('bcd')).toBe(undefined);
});

test('yz returns `undefined`', function() {
    expect(fearNotLetter('yz')).toBe(undefined);
});

test('abc returns `undefined`', function() {
    expect(fearNotLetter('abc')).toBe(undefined);
});