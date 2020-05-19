const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')//将.vue文件中的内容也正常打包，包括js和css，html代码

module.exports = {
    mode: 'development',//development时打包的代码不被压缩，production时打包的代码会被压缩
    entry: './src/index.js',
    output:{
        filename: 'index.js',
        path:path.resolve(__dirname,'dist')
    },
    module:{
        rules: [
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader'
                }
            },
            {
                test: /\.styl(us)$/,
                use: ['vue-style-loader','css-loader','postcss-loader','stylus-loader']//没有用style-loader，用了会报错
            }
        ],
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}