# HaikunatorJS

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fatrox%2Fhaikunatorjs%2Fbadge&style=flat-square)](https://actions-badge.atrox.dev/atrox/haikunatorjs/goto)
[![Latest Version](https://img.shields.io/npm/v/haikunator.svg?style=flat-square)](https://www.npmjs.com/package/haikunator)
[![JSR Version](https://img.shields.io/jsr/v/%40atrox/haikunator?style=flat-square)](https://jsr.io/@atrox/haikunator)
[![Coverage Status](https://img.shields.io/codecov/c/github/Atrox/haikunatorjs.svg?style=flat-square)](https://codecov.io/gh/Atrox/haikunatorjs)

Generate Heroku-like random names to use in your node applications.

## Installation

```
npm install --save haikunator
```

```
deno add @atrox/haikunator
```

## Usage

Haikunator is pretty simple.

```javascript
import Haikunator from 'haikunator'

// Instantiate Haikunator without options
var haikunator = new Haikunator()

// Instantiate Haikunator with default options
var customHaikunator = new Haikunator({
  adjectives: ['custom', 'adjectives'],
  nouns: ['custom', 'nouns'],
  seed: 'custom-seed',

  // class defaults
  defaults: {
    tokenLength: 8,
    tokenChars: 'HAIKUNATOR',
    // ...
  },
})

// default usage
haikunator.haikunate() // => "wispy-dust-1337"

// custom length (default=4)
haikunator.haikunate({ tokenLength: 6 }) // => "patient-king-887265"

// use hex instead of numbers
haikunator.haikunate({ tokenHex: true }) // => "purple-breeze-98e1"

// use custom chars instead of numbers/hex
haikunator.haikunate({ tokenChars: 'HAIKUNATE' }) // => "summer-atom-IHEA"

// don't include a token
haikunator.haikunate({ tokenLength: 0 }) // => "cold-wildflower"

// use a different delimiter
haikunator.haikunate({ delimiter: '.' }) // => "restless.sea.7976"

// no token, space delimiter
haikunator.haikunate({ tokenLength: 0, delimiter: ' ' }) // => "delicate haze"

// no token, empty delimiter
haikunator.haikunate({ tokenLength: 0, delimiter: '' }) // => "billowingleaf"
```

## Options

The following options are available:

```javascript
import Haikunator from 'haikunator'

var haikunator = new Haikunator({
  adjectives: ['custom', 'adjectives'],
  nouns: ['custom', 'nouns'],
  seed: 'custom-seed', // Custom seed

  // Class wide defaults, can get overridden by haikunate(options)
  defaults: {
    delimiter: '-',
    tokenLength: 4,
    tokenHex: false,
    tokenChars: '0123456789',
  },
})

// Same options are also available on the haikunate method
haikunator.haikunate({
  delimiter: '-',
  tokenLength: 4,
  tokenHex: false,
  tokenChars: '0123456789',
})
```

_If `tokenHex` is true, any tokens specified in `tokenChars` are ignored_

## Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

- [Report bugs](https://github.com/atrox/haikunatorjs/issues)
- Fix bugs and [submit pull requests](https://github.com/atrox/haikunatorjs/pulls)
- Write, clarify, or fix documentation
- Suggest or add new features

## Other Languages

Haikunator is also available in other languages. Check them out:

- .NET: https://github.com/Atrox/haikunator.net
- Python: https://github.com/Atrox/haikunatorpy
- PHP: https://github.com/Atrox/haikunatorphp
- Java: https://github.com/Atrox/haikunatorjava
- Go: https://github.com/Atrox/haikunatorgo
- Perl: https://github.com/Atrox/haikunatorperl
- Dart: https://github.com/Atrox/haikunatordart
- Ruby: https://github.com/usmanbashir/haikunator
- Rust: https://github.com/nishanths/rust-haikunator
