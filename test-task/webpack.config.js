const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProd = 'production' === process.env.NODE_ENV;
const port = process.env.PORT || 8080;
const paths = {
    dist: path.resolve(__dirname, 'dist'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src')
};

const htmlPlugin = new HtmlWebPackPlugin({
    filename: 'index.html',
    template: path.resolve(paths.src, 'index.html')
});
const cssPlugin = new MiniCssExtractPlugin({
    chunkFilename: '[id].min.css',
    filename: '[name].min.css'
});

let plugins = [cssPlugin, htmlPlugin];

if (isProd) {
    plugins = [
        new CleanWebpackPlugin([path.resolve(paths.dist, '*')]),
        new CopyWebpackPlugin([{ from: paths.public }])
    ].concat(plugins);
}

function getCssLoader(options = {}, loaders = []) {
    return [
        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
        { loader: 'css-loader', options },
        ...loaders
    ];
}

module.exports = {
    context: paths.src,
    devServer: {
        contentBase: paths.public,
        historyApiFallback: true,
        port
    },
    devtool: isProd ? 'source-map' : 'cheap-module-source-map',
    entry: {
        main: './index.jsx',
        vendors: ['babel-polyfill', 'whatwg-fetch']
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: getCssLoader({
                    importLoaders: 1,
                    sourceMap: true
                })
            },
            {
                test: /\.less$/,
                use: getCssLoader(
                    {
                        importLoaders: 2,
                        sourceMap: true
                    },
                    ['less-loader']
                )
            }
        ]
    },
    output: {
        filename: '[name].min.js',
        publicPath: '/'
    },
    plugins,
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        modules: [paths.src, 'node_modules']
    }
};