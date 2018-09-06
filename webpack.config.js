var webpack = require('webpack'),
    path = require('path');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
    const VueLoaderPlugin = require('vue-loader/lib/plugin')
let extractPlugin = new ExtractTextPlugin({
    filename: 'css/main.css'
});
module.exports = {

    entry: ['./repository-data/webfiles/src/main/resources/site/js/main.js'],
    output: {
        path: path.resolve(__dirname, './repository-data/webfiles/src/main/resources/site/js/dist'),
        publicPath: '..',
        filename: 'js/build.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '/images/[name].[ext]',
                    useRelativePath: false
                }
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '/fonts/[name].[ext]',
                    useRelativePath: false
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
};


module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': "production"
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        extractPlugin,
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);


/*
if(env.compression){
    var compress_images = require('compress-images'), INPUT_path_to_your_images, OUTPUT_path;

    INPUT_path_to_your_images = './repository-data/webfiles/src/main/resources/site/images/!**!/!*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
    OUTPUT_path = './repository-data/webfiles/src/main/resources/site/compressed/';

    compress_images(INPUT_path_to_your_images, OUTPUT_path, {compress_force: false, statistic: true, autoupdate: true}, false,
        {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
        {png: {engine: 'pngcrush', command: ['-reduce', '-brute']}},
        {svg: {engine: 'svgo', command: '--multipass'}},
        {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}}, function(){
        });

}*/
