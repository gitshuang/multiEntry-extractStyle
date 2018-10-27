const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const indexExtractCss = new ExtractTextPlugin('[name].[contenthash].css')
// const detailExtractCss = new ExtractTextPlugin('[name].[contenthash].css')

module.exports = {
    entry: {
        index:path.resolve(__dirname, "src/index/index.js"),
        detail:path.resolve(__dirname, "src/detail/index.js")
    },
    // devtool: 'inline-source-map',

    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env', '@babel/preset-react'],
                                plugins: ['@babel/plugin-proposal-class-properties']
                            }
                        }
                    },
                    {
                        test:/\.less$/,
                        use: [
                                {
                                    loader:"style-loader"
                                },
                                {
                                    loader:"css-loader"
                                },
                                {
                                    loader:"less-loader"
                                }
                        ]
                    },
                    
                    {

                        test: /\.css$/,
                        use: [ 'style-loader', 'css-loader' ]
                      
                    }

        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            chunks: ['index'],
            filename:'index.html',
            template: './src/index/index.html', //模板文件，可以带上react的根节点
            inject: true,
            minify: {
               removeComments: true,
               collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            chunks: ['detail'],
            filename:'detail.html',
            template: './src/detail/index.html', //模板文件，可以带上react的根节点
            inject: true,
            minify: {
               removeComments: true,
               collapseWhitespace: true
            }
        }),
        new MiniCssExtractPlugin({
          filename: "[name].css",
          chunkFilename: "[id].css"
        })
    ]

}