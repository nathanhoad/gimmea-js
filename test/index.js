import Should from 'should';

import Gimmea from '../src';


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
            var slug = Gimmea.slug('This is the Title!');
            
            slug.should.eql('this-is-the-title');
            
            done();
        });
    })
})