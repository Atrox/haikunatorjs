'use strict'

import test from 'ava'
import Haikunator from '../src/haikunator'

const haikunator = new Haikunator()

test('general functionality', t => {
  const tests = [
    [ {}, /[a-z]+-[a-z]+-[0-9]{4}$/ ],
    [ { tokenHex: true }, /[a-z]+-[a-z]+-[0-f]{4}$/ ],
    [ { tokenLength: 9 }, /[a-z]+-[a-z]+-[0-9]{9}$/ ],
    [ { tokenLength: 9, tokenHex: true }, /[a-z]+-[a-z]+-[0-f]{9}$/ ],
    [ { tokenLength: 0 }, /[a-z]+-[a-z]+$/ ],
    [ { delimiter: '.' }, /[a-z]+.[a-z]+.[0-9]{4}$/ ],
    [ { tokenLength: 0, delimiter: ' ' }, /[a-z]+ [a-z]+/ ],
    [ { tokenLength: 0, delimiter: '' }, /[a-z]+$/ ],
    [ { tokenChars: 'xyz' }, /[a-z]+-[a-z]+-[x-z]{4}$/ ]
  ]

  tests.forEach(test => {
    t.regex(haikunator.haikunate(test[ 0 ]), test[ 1 ])
  })
})

test('wont return the same name for subsequent calls', t => {
  const tests = [ new Haikunator(), new Haikunator() ]

  tests.forEach(h1 => {
    tests.forEach(h2 => {
      t.not(h1.haikunate(), h2.haikunate())
    })
  })
})

test('returns the same name if seed is provided', t => {
  const seed = 'definitively random seed'

  const h1 = new Haikunator({ seed: seed })
  const h2 = new Haikunator({ seed: seed })

  t.is(h1.haikunate(), h2.haikunate())
  t.is(h1.haikunate(), h2.haikunate())
})

test('class wide defaults', t => {
  const wordHaikunator = new Haikunator({
    defaults: {
      tokenLength: '0',
      delimiter: ''
    }
  })

  t.regex(wordHaikunator.haikunate(), /((?:[a-z][a-z]+))$/i)
})

test('class wide defaults can get overridden by function parameters', t => {
  const wordHaikunator = new Haikunator({
    defaults: {
      tokenLength: 0,
      delimiter: ''
    }
  })

  const opts = {
    delimiter: '.'
  }

  t.regex(wordHaikunator.haikunate(), /[a-z]+$/)
  t.regex(wordHaikunator.haikunate(opts), /[a-z]+.[a-z]+$/)
})

test('custom adjectives & nouns', t => {
  const customHaikunator = new Haikunator({
    adjectives: [ 'adjective' ],
    nouns: [ 'noun' ]
  })

  t.regex(customHaikunator.haikunate(), /adjective-noun-\d{4}$/)
})
