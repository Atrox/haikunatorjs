var assert = require('chai').assert,
    haikunate = require('../index');


describe('testing haikunate', function () {
    it('haikunate() should return 4 digits', function () {
        assert.match(haikunate(), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(\d{4})/i);
    });

    it('haikunate(4, true) should return 4 digits as hex', function () {
        assert.match(haikunate(4, true), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(.{4})/i);
    });

    it('haikunate(9) should return 9 digits', function () {
        assert.match(haikunate(9), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(\d{9})/i);
    });

    it('haikunate(9, true) should return 9 digits as hex', function () {
        assert.match(haikunate(9, true), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(.{9})/i);
    });

    it('wont return the same name for subsequent calls', function () {
        assert.notStrictEqual(haikunate(), haikunate());
    });

    it('drops the token if token range is 0', function () {
        assert.match(haikunate(0), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))/i);
    });

    it('permits optional configuration of the delimiter', function () {
        assert.match(haikunate(4, false, '.'), /((?:[a-z][a-z]+))(\.)((?:[a-z][a-z]+))(\.)(\d+)/i);
    });

    it('drops the token if token range is 0 and delimiter is an empty space', function () {
        assert.match(haikunate(0, false, ' '), /((?:[a-z][a-z]+))( )((?:[a-z][a-z]+))/i);
    });

    it('token and delimiter dropped, should just return one single word', function() {
        assert.match(haikunate(0, false, ''), /((?:[a-z][a-z]+))/i)
    });
});