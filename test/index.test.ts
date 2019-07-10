import Validator from 'validator';
import Gimmea from '../src';

describe('Gimmea', () => {
  describe('#uuid', () => {
    it('generates a valid UUID', () => {
      let id = Gimmea.uuid();
      expect(Validator.isUUID(id)).toBeTruthy();
    });
  });

  describe('#hash', () => {
    it('generates a hash from a seed string', () => {
      let firstHash = Gimmea.hash('test input');
      let secondHash = Gimmea.hash('test input');

      expect(firstHash.length).toBe(64);
      expect(secondHash).toEqual(firstHash);

      let thirdHash = Gimmea.hash('a different seed', 10);
      expect(thirdHash.length).toBe(10);
    });
  });

  describe('#slug', () => {
    it('slugifies a string', () => {
      let slug = Gimmea.slug('This is the Title!');
      expect(slug).toEqual('this-is-the-title');

      slug = Gimmea.slug("This title is 100% Someone's");
      expect(slug).toEqual('this-title-is-100-someones');
    });

    it('can include a random hash', () => {
      let slug = Gimmea.slug('Thing', 10);

      expect(slug).toContain('thing-');
      expect(slug.length).toBe(16);
    });
  });

  describe('weightedRandomValue', () => {
    it('picks a weighted random value', () => {
      let loadedCoin = [
        {
          name: 'heads',
          weight: 1
        },
        {
          name: 'tails',
          weight: 0
        }
      ];
      let result = Gimmea.weightedRandomValue(loadedCoin);
      expect(result.name).toEqual('heads');

      let results = { heads: 0, tails: 0 };
      let fairCoin = [
        {
          name: 'heads',
          chance: 1
        },
        {
          name: 'tails',
          chance: 1
        }
      ];
      for (let i = 0; i < 100; i++) {
        results[Gimmea.weightedRandomValue(fairCoin, 'chance').name]++;
      }
      expect(results.heads).toBeGreaterThan(40);
      expect(results.tails).toBeGreaterThan(40);
    });
  });
});
