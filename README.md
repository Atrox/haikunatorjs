# HaikunatorJS

[![Build Status](https://img.shields.io/travis/AtroxDev/haikunatorjs.svg?style=flat-square)](https://travis-ci.org/AtroxDev/haikunatorjs)
[![Latest Version](https://img.shields.io/npm/v/haikunator.svg?style=flat-square)](https://www.npmjs.com/package/haikunator)
[![Latest Version](https://img.shields.io/david/atroxdev/haikunatorjs.svg?style=flat-square)](https://david-dm.org/atroxdev/haikunatorjs)
[![Latest Version](https://img.shields.io/david/dev/atroxdev/haikunatorjs.svg?style=flat-square)](https://david-dm.org/atroxdev/haikunatorjs#info=devDependencies)

Generate Heroku-like random names to use in your node applications.

## Installation
```
npm install haikunator
```

## Usage

Haikunator is pretty simple. There is nothing to configure.

```javascript
var haikunate = require('haikunator');

haikunate() # => "caring-butterfly-1337"

# custom length (default=4)
haikunate(6) # => "caring-butterfly-133337"

# use hex instead of only numbers
haikunate(4, true) # => "caring-butterfly-4cdc"
```

## Contributing

Everyone is encouraged to help improve this project. Here are a few ways you can help:

- [Report bugs](https://github.com/atroxdev/haikunatorjs/issues)
- Fix bugs and [submit pull requests](https://github.com/atroxdev/haikunatorjs/pulls)
- Write, clarify, or fix documentation
- Suggest or add new features
