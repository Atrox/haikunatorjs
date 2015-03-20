var assert = require("chai").assert,
  haikunate = require("../index");


describe("testing haikunate", function () {
  it("should return 4 digits", function () {
    assert.match(haikunate(), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(\d{4})$/i);
  });

  it("should return 4 digits as hex", function () {
    assert.match(haikunate({tokenHex: true}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(.{4})$/i);
  });

  it("should return 9 digits", function () {
    assert.match(haikunate({tokenLength: 9}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(\d{9})$/i);
  });

  it("should return 9 digits as hex", function () {
    assert.match(haikunate({tokenLength: 9, tokenHex: true}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(.{9})$/i);
  });

  it("wont return the same name for subsequent calls", function () {
    assert.notStrictEqual(haikunate(), haikunate());
  });

  it("drops the token if token range is 0", function () {
    assert.match(haikunate({tokenLength: 0}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))$/i);
  });

  it("permits optional configuration of the delimiter", function () {
    assert.match(haikunate({delimiter: "."}), /((?:[a-z][a-z]+))(\.)((?:[a-z][a-z]+))(\.)(\d+)$/i);
  });

  it("drops the token if token range is 0 and delimiter is an empty space", function () {
    assert.match(haikunate({tokenLength: 0, delimiter: " "}), /((?:[a-z][a-z]+))( )((?:[a-z][a-z]+))$/i);
  });

  it("returns one single word if token and delimiter are dropped", function () {
    assert.match(haikunate({tokenLength: 0, delimiter: ""}), /((?:[a-z][a-z]+))$/i);
  });

  it("permits custom token chars", function () {
    assert.match(haikunate({tokenChars: "A"}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(AAAA)$/i);
  });
});