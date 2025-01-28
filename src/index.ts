import RandomGenerator, { RandomSeed } from 'random-seed'
import setDefaults from 'lodash.defaults'

/**
 * Adjectives used by haikunator
 */
const defaultAdjectives = [
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
 */
const defaultNouns = [
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
  'violet', 'voice', 'water', 'waterfall', 'wave', 'wildflower', 'wind', 'wood'
]

export type Options = {
  defaults?: Config
  adjectives?: string[]
  nouns?: string[]
  seed?: string
}

export type Config = {
  delimiter?: string
  tokenLength?: number
  tokenHex?: boolean
  tokenChars?: string
  camelCase?: boolean
}

/**
 * Default options used by haikunate method
 */
const defaultOptions: Config = {
  delimiter: '-',
  tokenLength: 4,
  tokenHex: false,
  tokenChars: '0123456789',
  camelCase: false
}

export default class Haikunator {
  adjectives: string[]
  nouns: string[]

  random: RandomSeed
  config: Config

  /**
   * Initialize new haikunator
   */
  constructor(options: Options = {}) {
    this.adjectives = options.adjectives || defaultAdjectives
    this.nouns = options.nouns || defaultNouns

    this.random = RandomGenerator.create(options.seed)
    this.config = setDefaults(options.defaults, defaultOptions)
  }

  /**
   * Generate heroku-like random names
   */
  haikunate(options?: Config): string {
    // set specified options
    const config = setDefaults(options, this.config)

    // set tokenChars if tokenHex is set
    if (config.tokenHex === true) {
      config.tokenChars = '0123456789abcdef'
    }

    // pick adjective and noun
    const adjective = this._randomElement(this.adjectives)
    const noun = this._randomElement(this.nouns)

    // create random token
    if (!config.tokenLength) config.tokenLength = 0

    let token = ''
    for (let i = 0; i < config.tokenLength; i++) {
      token += this._randomElement(config.tokenChars)
    }

    // create result and return
    const sections = [adjective, noun, token].filter(e => !!e)
    if (config.camelCase) {
      return sections.map(e => e && e.charAt(0).toUpperCase() + e.slice(1)).join("");
    }
    return sections.join(config.delimiter);
  }

  /**
   * Get a random element from an array/string
   * @param {(string|Array)} array
   * @returns {*}
   * @private
   */
  _randomElement(array: (string | Array<any> | undefined)): (string | undefined) {
    if (!array) return undefined
    return array[this.random(array.length)]
  }
}
