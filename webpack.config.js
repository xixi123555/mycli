const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'index.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules: [
            {
                test:/\.vue$/,
                loader: 'vue-loader'
            }
        ],
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}