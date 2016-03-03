const Crypto = require('crypto');


const Gimmea = {
    
    hash (seed, length) {
        length = length || 64;
        
        return Crypto.createHash("sha256").update(seed.toString(), "utf8").digest("hex").substring(0, length);
    },
    
    
    slug (string) {
        return string.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/\-+/g, '-').replace(/(^\-|\-$)/, '');
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
    }

};


module.exports = Gimmea;