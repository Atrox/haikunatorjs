import test from "ava";
import haikunate from "../src/haikunator";

test('should return 4 digits', t => {
  t.regex(haikunate(), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(\d{4})$/i);
});

test('should return 4 digits as hex', t => {
  const opts = {
    tokenHex: true
  };

  t.regex(haikunate(opts), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(.{4})$/i);
});

test('should return 9 digits', t => {
  const opts = {
    tokenLength: 9
  };

  t.regex(haikunate(opts), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(\d{9})$/i);
});

test('should return 9 digits as hex', t => {
  const opts = {
    tokenLength: 9,
    tokenHex: true
  };

  t.regex(haikunate(opts), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(.{9})$/i);
});

test('drops token if token range is 0', t => {
  const opts = {
    tokenLength: 0
  };

  t.regex(haikunate(opts), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))$/i);
});

test('permits optional configuration of the delimiter', t => {
  const opts = {
    delimiter: '.'
  };

  t.regex(haikunate(opts), /((?:[a-z][a-z]+))(\.)((?:[a-z][a-z]+))(\.)(\d+)$/i);
});

test('drops the token if token range is 0 and delimiter is an empty space', t => {
  const opts = {
    tokenLength: 0,
    delimiter: ' '
  };

  t.regex(haikunate(opts), /((?:[a-z][a-z]+))( )((?:[a-z][a-z]+))$/i);
});

test('returns one single word if token and delimiter are dropped', t => {
  const opts = {
    tokenLength: 0,
    delimiter: ''
  };

  t.regex(haikunate(opts), /((?:[a-z][a-z]+))$/i);
});

test('permits custom token chars', t => {
  const opts = {
    tokenChars: 'A'
  };

  t.regex(haikunate(opts), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(AAAA)$/i);
});

test('wont return the same name for subsequent calls', t => {
  t.not(haikunate(), haikunate());
});

test('returns the same name if seed is provided', t => {
  const opts = {
    seed: 'foo'
  };

  const [haiku1, haiku2] = [haikunate(opts), haikunate(opts)];
  t.is(haiku1, haiku2);
});
