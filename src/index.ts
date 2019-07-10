import Crypto from 'crypto';
import UUID from 'uuid';

/**
 * Shortcut for generating a v4 uuid
 */
export function uuid(): string {
  return UUID.v4();
}

/**
 * Generate a hex digest from an input
 * @param seed the value to hash
 * @param length truncate the output to this length
 */
export function hash(seed: string | number, length: number = 64): string {
  seed = seed || Math.random();

  return Crypto.createHash('sha256')
    .update(seed.toString(), 'utf8')
    .digest('hex')
    .substring(0, length);
}

/**
 * Convert a sentence to a URL hash with an optional random hash on the end
 * @param string the sentence to slugify
 * @param hashLength add some a hash of this length to the end
 */
export function slug(string: string, hashLength: number = 0): string {
  var slug = string
    .toLowerCase()
    .replace(/[\'\!\"\&\%]/g, '')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/\-+/g, '-')
    .replace(/(^\-|\-$)/, '');
  if (hashLength > 0) {
    slug += '-' + hash(null, hashLength);
  }

  return slug;
}

/**
 * Get a weighted random value from an array
 * @param array an array of values and weights
 * @param weightProperty the property to use for weighting
 */
export function weightedRandomValue<T>(array: Array<T>, weightProperty: string = 'weight'): T {
  const weightedArray = [];
  array.forEach(item => {
    for (let i = 0; i < parseInt(item[weightProperty], 10); i++) {
      weightedArray.push(item);
    }
  });

  return weightedArray[Math.floor(Math.random() * weightedArray.length)];
}

export default {
  uuid,
  hash,
  slug,
  weightedRandomValue
};
