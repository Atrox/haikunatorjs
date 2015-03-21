# HaikunatorJS

[![Build Status](https://img.shields.io/travis/Atrox/haikunatorjs.svg?style=flat-square)](https://travis-ci.org/Atrox/haikunatorjs)
[![Latest Version](https://img.shields.io/npm/v/haikunator.svg?style=flat-square)](https://www.npmjs.com/package/haikunator)
[![Dependency Status](https://img.shields.io/david/atrox/haikunatorjs.svg?style=flat-square)](https://david-dm.org/atrox/haikunatorjs)
[![devDependency Status](https://img.shields.io/david/dev/atrox/haikunatorjs.svg?style=flat-square)](https://david-dm.org/atrox/haikunatorjs#info=devDependencies)
[![Coverage Status](https://img.shields.io/coveralls/Atrox/haikunatorjs.svg?style=flat-square)](https://coveralls.io/r/Atrox/haikunatorjs)

Generate Heroku-like random names to use in your node applications.

## Installation

```
npm install haikunator
```

## Usage

Haikunator is pretty simple.

```javascript
var haikunate = require("haikunator");

// default usage
haikunate() // => "wispy-dust-1337"

// custom length (default=4)
haikunate({tokenLength: 6}) // => "patient-king-887265"

// use hex instead of numbers
haikunate({tokenHex: true}) // => "purple-breeze-98e1"

// use custom chars instead of numbers/hex
haikunate({tokenChars: "HAIKUNATE"}) // => "summer-atom-IHEA"

// don't include a token
haikunate({tokenLength: 0}) // => "cold-wildflower"

// use a different delimiter
haikunate({delimiter: "."}) // => "restless.sea.7976"

// no token, space delimiter
haikunate({tokenLength: 0, delimiter: " "}) // => "delicate haze"

// no token, empty delimiter
haikunate({tokenLength: 0, delimiter: ""}) // => "billowingleaf"
```

## Options

The following options are available:

```javascript
haikunate({
  delimiter: "-",
  tokenLength: 4,
  tokenHex: false,
  tokenChars: "0123456789"
});
```
*If ```tokenHex``` is true, it overrides any tokens specified in ```tokenChars```*

## Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

- [Report bugs](https://github.com/atroxdev/haikunatorjs/issues)
- Fix bugs and [submit pull requests](https://github.com/atroxdev/haikunatorjs/pulls)
- Write, clarify, or fix documentation
- Suggest or add new features

## Other Languages

Haikunator is also available in other languages. Check them out:

- Python: https://github.com/Atrox/haikunatorpy
- Ruby: https://github.com/usmanbashir/haikunator
- Go: https://github.com/yelinaung/go-haikunator
