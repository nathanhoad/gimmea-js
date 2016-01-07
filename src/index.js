import Crypto from 'crypto';


var Gimmea = {
    
    hash: function (seed, length) {
        length = length || 64;
        
        return Crypto.createHash("sha256").update(seed.toString(), "utf8").digest("hex").substring(0, length);
    },
    
    
    slug: function (string) {
        return string.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/\-+/g, '-').replace(/(^\-|\-$)/, '');
    }

};


module.exports = Gimmea;