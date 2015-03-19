# HaikunatorJS

[![Build Status](https://img.shields.io/travis/AtroxDev/haikunatorjs.svg?style=flat-square)](https://travis-ci.org/AtroxDev/haikunatorjs)
[![Latest Version](https://img.shields.io/npm/v/haikunator.svg?style=flat-square)](https://www.npmjs.com/package/haikunator)
[![Dependency Status](https://img.shields.io/david/atroxdev/haikunatorjs.svg?style=flat-square)](https://david-dm.org/atroxdev/haikunatorjs)
[![devDependency Status](https://img.shields.io/david/dev/atroxdev/haikunatorjs.svg?style=flat-square)](https://david-dm.org/atroxdev/haikunatorjs#info=devDependencies)
[![Code Climate](https://img.shields.io/codeclimate/github/AtroxDev/haikunatorjs.svg?style=flat-square)](https://codeclimate.com/github/AtroxDev/haikunatorjs)

Generate Heroku-like random names to use in your node applications.

## Installation
```
npm install haikunator
```

## Usage

Haikunator is pretty simple.

```javascript
var haikunate = require('haikunator');

// default usage
haikunate() // => 'wispy-dust-1337'

// custom length (default=4)
haikunate(6) // => 'patient-king-887265'

// use hex instead of only numbers
haikunate(4, true) // => 'purple-breeze-98e1'

// don't include a token
haikunate(0) // => 'cold-wildflower'

// use a different delimiter
haikunate(4, false, '.') // => 'restless.sea.7976'

// no token, space delimiter
haikunate(0, false, ' ') // => 'delicate haze'

// no token, empty delimiter
haikunate(0, false, '') // => 'billowingleaf'
```

## Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

- [Report bugs](https://github.com/atroxdev/haikunatorjs/issues)
- Fix bugs and [submit pull requests](https://github.com/atroxdev/haikunatorjs/pulls)
- Write, clarify, or fix documentation
- Suggest or add new features
