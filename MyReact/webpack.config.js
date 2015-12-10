var webpack = new require('webpack');

module.exports = {
    //The sources of this app are made from a Typescript file and a Less file,
    //These "entry points" will both respectively import their Typescript and less dependencies
    entry: {
        vendor: ['react-dom', 'react'],
        app: ['./App.tsx']
    },
    //The output is a single bundle of js and css which is loaded by index.html
    output: {
        path: './js/generated', //Path where bundle.js is generated on the file system
        publicPath: '/js/generated/', //Relative parent URL of the bundle
        filename: 'bundle.js'
    },
    //The list of extension that will be resolved for modules
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.less', '.css']
    },
    // Generate a source map to allow debugging of original source files rather
    // than the compiled webpack output
    devtool: 'source-map',
    // ts-loader will transpile the Typescript into Javascript
    // style: insert a style tag with the CSS in the page
    module: {
        loaders: [
            {test: /\.ts(x?)$/, loader: 'ts-loader?sourceMap'}
        ]
    },
    plugins: [
        // Split vendor and main bundle to prevent the user from downloading all the vendor JS again when we put out a new release
        // Longer term we might want to look at splitting into more bundles for different areas of the application for even faster updates
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor-bundle.js',
            minChunks: Infinity
        })
    ]
};
