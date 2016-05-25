'use strict'

import test from 'ava'
import Haikunator from '../src/haikunator'

const haikunator = new Haikunator()

test('should return 4 digits', t => {
  t.regex(haikunator.haikunate(), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(\d{4})$/i)
})

test('should return 4 digits as hex', t => {
  const opts = {
    tokenHex: true
  }

  t.regex(haikunator.haikunate(opts), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(.{4})$/i)
})

test('should return 9 digits', t => {
  const opts = {
    tokenLength: 9
  }

  t.regex(haikunator.haikunate(opts), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(\d{9})$/i)
})

test('should return 9 digits as hex', t => {
  const opts = {
    tokenLength: 9,
    tokenHex: true
  }

  t.regex(haikunator.haikunate(opts), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(.{9})$/i)
})

test('drops token if token range is 0', t => {
  const opts = {
    tokenLength: 0
  }

  t.regex(haikunator.haikunate(opts), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))$/i)
})

test('permits optional configuration of the delimiter', t => {
  const opts = {
    delimiter: '.'
  }

  t.regex(haikunator.haikunate(opts), /((?:[a-z][a-z]+))(\.)((?:[a-z][a-z]+))(\.)(\d+)$/i)
})

test('drops the token if token range is 0 and delimiter is an empty space', t => {
  const opts = {
    tokenLength: 0,
    delimiter: ' '
  }

  t.regex(haikunator.haikunate(opts), /((?:[a-z][a-z]+))( )((?:[a-z][a-z]+))$/i)
})

test('returns one single word if token and delimiter are dropped', t => {
  const opts = {
    tokenLength: 0,
    delimiter: ''
  }

  t.regex(haikunator.haikunate(opts), /((?:[a-z][a-z]+))$/i)
})

test('permits custom token chars', t => {
  const opts = {
    tokenChars: 'A'
  }

  t.regex(haikunator.haikunate(opts), /((?:[a-z][a-z]+))(-)((?:[a-z][a-z]+))(-)(AAAA)$/i)
})

test('wont return the same name for subsequent calls', t => {
  const cHaikunator = new Haikunator()

  const [haiku1, haiku2] = [ haikunator.haikunate(), haikunator.haikunate() ]
  const [haiku3, haiku4] = [ cHaikunator.haikunate(), cHaikunator.haikunate() ]

  t.not(haiku1, haiku2)
  t.not(haiku3, haiku4)
  t.not(haiku1, haiku3)
  t.not(haiku2, haiku4)
})

test('returns the same name if seed is provided', t => {
  // New Haikunator 1
  const cHaikunator1 = new Haikunator({
    seed: 'foo'
  })

  // New Haikunator 2
  const cHaikunator2 = new Haikunator({
    seed: 'foo'
  })

  const [haiku1, haiku12] = [ cHaikunator1.haikunate(), cHaikunator1.haikunate() ]
  const [haiku2, haiku22] = [ cHaikunator2.haikunate(), cHaikunator2.haikunate() ]

  t.is(haiku1, haiku2)
  t.is(haiku12, haiku22)
})

test('class wide defaults', t => {
  const wordHaikunator = new Haikunator({
    defaults: {
      tokenLength: '0',
      delimiter: ''
    }
  })

  const [haiku1, haiku2] = [ wordHaikunator.haikunate(), wordHaikunator.haikunate() ]

  t.regex(haiku1, /((?:[a-z][a-z]+))$/i)
  t.regex(haiku2, /((?:[a-z][a-z]+))$/i)
})

test('class wide defaults can get overriden by function parameters', t => {
  const wordHaikunator = new Haikunator({
    defaults: {
      tokenLength: '0',
      delimiter: ''
    }
  })

  const opts = {
    delimiter: '+'
  }

  const [haiku1, haiku2] = [ wordHaikunator.haikunate(), wordHaikunator.haikunate(opts) ]

  t.regex(haiku1, /((?:[a-z][a-z]+))$/i)
  t.regex(haiku2, /((?:[a-z][a-z]+))(\+)((?:[a-z][a-z]+))$/i)
})
