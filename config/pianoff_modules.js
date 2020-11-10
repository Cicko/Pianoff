const path = require('path');


const modules = {
    lib: path.resolve('src/lib'),
    hooks: path.resolve(__dirname, '../src/lib/hooks'),
    assets: path.resolve('src/assets'),
    pages: path.resolve('src/pages'),
    images: path.resolve('src/assets/images'),
}

module.exports = modules