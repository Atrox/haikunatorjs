'use strict'

import RandomGenerator from 'random-seed'
import setDefaults from 'lodash.defaults'

/**
 * Adjectives used by haikunator
 * @type {string[]}
 */
const adjectives = [
  'aged', 'ancient', 'autumn', 'billowing', 'bitter', 'black', 'blue', 'bold',
  'broad', 'broken', 'calm', 'cold', 'cool', 'crimson', 'curly', 'damp',
  'dark', 'dawn', 'delicate', 'divine', 'dry', 'empty', 'falling', 'fancy',
  'flat', 'floral', 'fragrant', 'frosty', 'gentle', 'green', 'hidden', 'holy',
  'icy', 'jolly', 'late', 'lingering', 'little', 'lively', 'long', 'lucky',
  'misty', 'morning', 'muddy', 'mute', 'nameless', 'noisy', 'odd', 'old',
  'orange', 'patient', 'plain', 'polished', 'proud', 'purple', 'quiet', 'rapid',
  'raspy', 'red', 'restless', 'rough', 'round', 'royal', 'shiny', 'shrill',
  'shy', 'silent', 'small', 'snowy', 'soft', 'solitary', 'sparkling', 'spring',
  'square', 'steep', 'still', 'summer', 'super', 'sweet', 'throbbing', 'tight',
  'tiny', 'twilight', 'wandering', 'weathered', 'white', 'wild', 'winter', 'wispy',
  'withered', 'yellow', 'young'
]

/**
 * Nouns used by haikunator
 * @type {string[]}
 */
const nouns = [
  'art', 'band', 'bar', 'base', 'bird', 'block', 'boat', 'bonus',
  'bread', 'breeze', 'brook', 'bush', 'butterfly', 'cake', 'cell', 'cherry',
  'cloud', 'credit', 'darkness', 'dawn', 'dew', 'disk', 'dream', 'dust',
  'feather', 'field', 'fire', 'firefly', 'flower', 'fog', 'forest', 'frog',
  'frost', 'glade', 'glitter', 'grass', 'hall', 'hat', 'haze', 'heart',
  'hill', 'king', 'lab', 'lake', 'leaf', 'limit', 'math', 'meadow',
  'mode', 'moon', 'morning', 'mountain', 'mouse', 'mud', 'night', 'paper',
  'pine', 'poetry', 'pond', 'queen', 'rain', 'recipe', 'resonance', 'rice',
  'river', 'salad', 'scene', 'sea', 'shadow', 'shape', 'silence', 'sky',
  'smoke', 'snow', 'snowflake', 'sound', 'star', 'sun', 'sun', 'sunset',
  'surf', 'term', 'thunder', 'tooth', 'tree', 'truth', 'union', 'unit',
  'violet', 'voice', 'water', 'water', 'waterfall', 'wave', 'wildflower', 'wind',
  'wood'
]

/**
 * Default options used by haikunate method
 * @type {{delimiter: string, tokenLength: number, tokenHex: boolean, tokenChars: string}}
 */
const defaultOptions = {
  delimiter: '-',
  tokenLength: 4,
  tokenHex: false,
  tokenChars: '0123456789'
}

/**
 *
 */
export default class Haikunator {
  /**
   * Initialize new haikunator
   * @param {object} defaults
   * @param {string} seed
   */
  constructor ({ defaults = {}, seed } = {}) {
    this.random = new RandomGenerator(seed)
    this.config = setDefaults(defaults, defaultOptions)
  }

  /**
   *
   * @param {object} options
   * @returns {string}
   */
  haikunate (options = {}) {
    // set specified options
    const config = setDefaults(options, this.config)

    // set tokenChars if tokenHex is set
    if (config.tokenHex === true) {
      config.tokenChars = '0123456789abcdef'
    }

    // pick adjective and noun
    const adjective = adjectives[ this.random(adjectives.length) ]
    const noun = nouns[ this.random(nouns.length) ]

    // create hex token
    let token = ''
    for (let i = 0; i < config.tokenLength; i++) {
      token += config.tokenChars.charAt(this.random(config.tokenChars.length))
    }

    // create result and return
    const sections = [ adjective, noun, token ]
    return sections.filter(e => {
      return e === 0 || e
    }).join(config.delimiter)
  }
}
