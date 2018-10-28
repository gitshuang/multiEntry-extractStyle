const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const indexExtractCss = new ExtractTextPlugin('[name].[contenthash].css')
// const detailExtractCss = new ExtractTextPlugin('[name].[contenthash].css')

//const extractCSS = new ExtractTextPlugin('css.css');

const extractLESS = new ExtractTextPlugin('[name].css');

function getEntry () {
  let globPath = 'src/**/index.html'
  // (\/|\\\\) 这种写法是为了兼容 windows和 mac系统目录路径的不同写法
  let pathDir = 'src(\/|\\\\)(.*?)'
  let files = glob.sync(globPath)
  let dirname, entries = []
  for (let i = 0; i < files.length; i++) {
    dirname = path.dirname(files[i])
    entries.push(dirname.replace(new RegExp('^' + pathDir), '$2'))
  }
  return entries
  
}
function addEntry(){
    let entryObj = {}
    getEntry().forEach(item => {
    entryObj[item] = path.resolve(__dirname, 'src', item, 'index.js')
  })
  return entryObj
}


module.exports = webpackconfig = {
    entry:addEntry(),
    // {
    //     index:path.resolve(__dirname, "src/index/index.js"),
    //     detail:path.resolve(__dirname, "src/detail/index.js")
    // },
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
                        use:extractLESS.extract([ 'css-loader', 'less-loader' ])

 
                        // use: [
                        //         {
                        //             loader:"style-loader"
                        //         },
                        //         {
                        //             loader:"css-loader"
                        //         },
                        //         {
                        //             loader:"less-loader"
                        //         }
                        // ]
                    },
                    
                    // {

                    //     test: /\.css$/,
                    //     use: [ 'style-loader', 'css-loader' ]
                      
                    // }

        ]
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        extractLESS
    ]

}
getEntry().forEach(function(item){
    var config = {
            chunks: [item],
            filename:path.join(item)+'.html',
            template: path.join(__dirname,'src',item,'index.html') ,
            inject: true,
            minify: {
               removeComments: true,
               collapseWhitespace: true
            }
        }
        webpackconfig.plugins.push(new HtmlWebpackPlugin(config))
})
