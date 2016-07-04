const Crypto = require('crypto');
const UUID = require('node-uuid');


const Gimmea = {
    
    uuid () {
        return UUID.v4();
    },
    
    
    hash (seed, length) {
        length = length || 64;
        
        return Crypto.createHash("sha256").update(seed.toString(), "utf8").digest("hex").substring(0, length);
    },
    
    
    slug (string, hash_size) {
        hash_size = hash_size || 0;
        
        var slug = string.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/\-+/g, '-').replace(/(^\-|\-$)/, '');
        if (hash_size > 0) {
            slug += '-' + Gimmea.hash(Math.random().toString(), hash_size);
        }
        
        return slug;
    },
    
    
    grid (width, height, default_value) {
        if (!height) height = width;
        if (typeof default_value === "undefined") default_value = null;
        
        let grid = [];
        for (let x = 0; x < width; x ++) {
            grid[x] = [];
            for (let y = 0; y < height; y ++) {
                grid[x][y] = default_value;
            }
        }
        
        return grid;
    },
    
    
    weightedRandomValue (array, weightProperty) {
        if (!weightProperty) weightProperty = 'weight';
    
        var weightedArray = [];
        
        array.forEach((item) => {
            for (let i = 0; i < parseInt(item[weightProperty], 10); i++) {
                weightedArray.push(item);
            }
        });
        
        return weightedArray[Math.floor(Math.random() * weightedArray.length)];
    }

};


module.exports = Gimmea;