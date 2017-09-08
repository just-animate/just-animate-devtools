var path = require('path')
var webpack = require('webpack')
var CopyWebpackPlugin = require('copy-webpack-plugin')

var basePath = path.join(__dirname, '../')

var config = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.js', '.vue']
    },
    entry: {
        'panel/panel': './panel/panel.js',
        'background_scripts/background': './background_scripts/background.js',
        main: './main.js'
    },
    output: {
        path: path.join(basePath, 'plugin'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        scss: 'vue-style-loader!css-loader!sass-loader',
                        sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    performance: {
        hints: false
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'manifest.json', to: 'manifest.json' },
            { from: 'icons/**/**', to: './' },
            { from: 'main.html', to: 'main.html' },
            { from: 'panel/panel.html', to: 'panel/panel.html' }
        ])
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.devtool = 'inline-source-map'
    config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    )
}

module.exports = config
