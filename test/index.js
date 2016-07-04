const Should = require('should');
const Validator = require('validator');

const Gimmea = require('../lib');


describe('Gimmea', () => {
    describe('#uuid', () => {
        it('generates a valid UUID', (done) => {
            let id = Gimmea.uuid();
            
            Validator.isUUID(id).should.be.true();
            
            done();
        });
    });
    
    
    describe('#hash', () => {
        it('generates a hash from a seed string', (done) => {
            let first_hash = Gimmea.hash('test input');
            let second_hash = Gimmea.hash('test input');
            
            first_hash.should.be.a.String;
            first_hash.length.should.eql(64);
            second_hash.should.eql(first_hash);
            
            let third_hash = Gimmea.hash('a different seed', 10);
            third_hash.length.should.eql(10);
            
            done();
        });
    });
    
    
    describe('#slug', () => {
        it('slugifies a string', (done) => {
            let slug = Gimmea.slug('This is the Title!');
            
            slug.should.eql('this-is-the-title');
            
            done();
        });
        
        it('can include a random hash', (done) => {
            let slug = Gimmea.slug('Thing', 10);
            
            slug.should.containEql('thing-');
            slug.length.should.eql(16);
            
            done();
        });
    });
    
    
    describe("#grid", () => {
        it('generates a grid', (done) => {
            let grid = Gimmea.grid(10);
            
            grid.length.should.eql(10);
            Should(grid[0][0]).eql(null);
            
            grid = Gimmea.grid(10, 15, false);
            grid.length.should.eql(10);
            grid[0].length.should.eql(15);
            grid[0][0].should.eql(false);
            
            done();
        });
    });
    
    
    describe("weightedRandomValue", () => {
        it('picks a weighted random value', (done) => {
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
            result.name.should.equal('heads');
            
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
            results.heads.should.be.above(40);
            results.tails.should.be.above(40);
            
            done();
        });
    });
})