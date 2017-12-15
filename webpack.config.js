/**
 * Created by yuan.luo on 2017/12/13.
 */
//webpack.config.js
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    // entry : './src/index.js',//入口文件
    entry: {
        teach : ['babel-polyfill', './src/index.js']   // ./src/index.js  //入口文件     babel-polyfill  做适配
    },
    output : {//输出文件
        filename: "[name].bundle.js",//输出文件名
        path : __dirname + '/webpack'//输出文件路径
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback:'style-loader',use:'css-loader'})},
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf|otf)\??.*$/, loader: "url-loader?limit=8192&name=./fonts/[name].[ext]"}
        ]
    },
    plugins:  [
        new ExtractTextPlugin({ filename: './[name].min.css', disable: false, allChunks: true })
    ]
}