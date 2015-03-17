var assert = require('chai').assert,
haikunate = require('../index');


describe('test haikunate()', function() {
	it('default use', function() {
		assert.match(haikunate(), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(\d)(\d)(\d)(\d)/i);
	});
	it('matching with hex turned on', function() {
		assert.match(haikunate(4, true), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(.)(.)(.)(.)/i);
	});
	it('matching with 9 ints', function() {
		assert.match(haikunate(9), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)(\d)/i);
	});
	it('matching with hex tuned on', function() {
		assert.match(haikunate(9, true), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(.)(.)(.)(.)(.)(.)(.)(.)(.)/i);
	});
})