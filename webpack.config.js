var path= require('path');
var webpack=require('webpack');
const htmlWebpackPlugin=require('html-webpack-plugin');
const VueLoaderPlugin=require('vue-loader/lib/plugin');
module.exports={
    entry: path.join(__dirname,'main.js'),
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.(ttf|eot|woff|woff2|svg)$/,use:'url-loader'},
            {test:/\.(jpg|png|gif|jpeg)$/,use:[{loader:'url-loader',options:{esModule: false}}]},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']}
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname,'index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    mode:'development'
}
