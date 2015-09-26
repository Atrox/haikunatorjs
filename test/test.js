var assert = require("chai").assert,
  haikunate = require("../src/haikunator");


describe("testing haikunate", () => {
  it("should return 4 digits", () => {
    assert.match(haikunate(), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(\d{4})$/i);
  });

  it("should return 4 digits as hex", () => {
    assert.match(haikunate({tokenHex: true}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(.{4})$/i);
  });

  it("should return 9 digits", () => {
    assert.match(haikunate({tokenLength: 9}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(\d{9})$/i);
  });

  it("should return 9 digits as hex", () => {
    assert.match(haikunate({tokenLength: 9, tokenHex: true}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(.{9})$/i);
  });

  it("wont return the same name for subsequent calls", () => {
    assert.notStrictEqual(haikunate(), haikunate());
  });

  it("drops the token if token range is 0", () => {
    assert.match(haikunate({tokenLength: 0}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))$/i);
  });

  it("permits optional configuration of the delimiter", () => {
    assert.match(haikunate({delimiter: "."}), /((?:[a-z][a-z]+))(\.)((?:[a-z][a-z]+))(\.)(\d+)$/i);
  });

  it("drops the token if token range is 0 and delimiter is an empty space", () => {
    assert.match(haikunate({tokenLength: 0, delimiter: " "}), /((?:[a-z][a-z]+))( )((?:[a-z][a-z]+))$/i);
  });

  it("returns one single word if token and delimiter are dropped", () => {
    assert.match(haikunate({tokenLength: 0, delimiter: ""}), /((?:[a-z][a-z]+))$/i);
  });

  it("permits custom token chars", () => {
    assert.match(haikunate({tokenChars: "A"}), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(AAAA)$/i);
  });
});