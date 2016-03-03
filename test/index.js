const Should = require('should');

const Gimmea = require('../lib');


describe('Gimmea', () => {
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
})