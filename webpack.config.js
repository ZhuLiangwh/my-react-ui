var webpack = require('webpack');
var path = require('path');
var env = process.env;
var fs = require('fs');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var WebpackDevServer = require('webpack-dev-server');

var OpenBrowserPlugin = require('open-browser-webpack-plugin');


var appName = 'app';
//var host = 'localhost';
//var port = '9000';

var plugins = [], outputFile;

var isProduction = function () {
    return env.NODE_ENV === 'production';
};
if(isProduction()){
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = appName + '.min.js';
}else{
    outputFile = appName + '.js';
}



var config = {
    entry: __dirname + '/' + appName + "/libs/app.js",
    devtool: isProduction() ? null:'source-map',
    output: {
        path: __dirname + '/' + appName+ '/build',
        filename: outputFile
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
    plugins: plugins,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader"]
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/, loader: 'style-loader!css-loader' 
            },
            {
                test: /\.scss$/, loader: 'style!css!sass?sourceMap'
            }
        ]
    }
};

if (!isProduction()) {
    new WebpackDevServer(webpack(config), {
        contentBase: __dirname,
        hot: true,
        debug: true

    });
    //    .listen(port, host, function (err, result) {
    //    if (err) {
    //        console.log(err);
    //    }
    //});
    //console.log('-------------------------');
    //console.log('Local web server runs at http://' + host + ':' + port+ '/'+ appName );
    //console.log('-------------------------');
    //plugins.push(new OpenBrowserPlugin({ url: 'http://' + host + ':' + port + '/'+ appName + '/index.html' }));

}

module.exports = config;