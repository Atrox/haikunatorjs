import Haikunator from '../index'

const haikunator = new Haikunator()

test('general functionality', () => {
  const tests = [
    [{}, /[a-z]+-[a-z]+-[0-9]{4}$/],
    [{ tokenHex: true }, /[a-z]+-[a-z]+-[0-f]{4}$/],
    [{ tokenLength: 9 }, /[a-z]+-[a-z]+-[0-9]{9}$/],
    [{ tokenLength: 9, tokenHex: true }, /[a-z]+-[a-z]+-[0-f]{9}$/],
    [{ tokenLength: 0 }, /[a-z]+-[a-z]+$/],
    [{ delimiter: '.' }, /[a-z]+.[a-z]+.[0-9]{4}$/],
    [{ tokenLength: 0, delimiter: ' ' }, /[a-z]+ [a-z]+/],
    [{ tokenLength: 0, delimiter: '' }, /[a-z]+$/],
    [{ tokenChars: 'xyz' }, /[a-z]+-[a-z]+-[x-z]{4}$/]
  ]

  tests.forEach(test => {
    const options = test[0]
    const regex = test[1]

    // @ts-ignore
    expect(haikunator.haikunate(options)).toMatch(regex)
  })
})

test('wont return the same name for subsequent calls', () => {
  const tests = [new Haikunator(), new Haikunator()]

  tests.forEach(h1 => {
    tests.forEach(h2 => {
      expect(h1.haikunate()).not.toBe(h2.haikunate())
    })
  })
})

test('returns the same name if seed is provided', () => {
  const seed = 'definitively random seed'

  const h1 = new Haikunator({ seed: seed })
  const h2 = new Haikunator({ seed: seed })

  expect(h1.haikunate()).toBe(h2.haikunate())
  expect(h1.haikunate()).toBe(h2.haikunate())
})

test('class wide defaults', () => {
  const wordHaikunator = new Haikunator({
    defaults: {
      tokenLength: 0,
      delimiter: ''
    }
  })

  expect(wordHaikunator.haikunate()).toMatch(/((?:[a-z][a-z]+))$/i)
})

test('class wide defaults can get overridden by function parameters', () => {
  const wordHaikunator = new Haikunator({
    defaults: {
      tokenLength: 0,
      delimiter: ''
    }
  })

  const opts = {
    delimiter: '.'
  }

  expect(wordHaikunator.haikunate()).toMatch(/[a-z]+$/)
  expect(wordHaikunator.haikunate(opts)).toMatch(/[a-z]+.[a-z]+$/)
})

test('custom adjectives & nouns', () => {
  const customHaikunator = new Haikunator({
    adjectives: ['adjective'],
    nouns: ['noun']
  })

  expect(customHaikunator.haikunate()).toMatch(/adjective-noun-\d{4}$/)
})

test('camelCase', () => {
  const customHaikunator = new Haikunator({
    adjectives: ['adjective'],
    nouns: ['noun'],
    defaults: {
      camelCase: true
    }
  })

  expect(customHaikunator.haikunate()).toMatch(/AdjectiveNoun\d{4}$/)
})
