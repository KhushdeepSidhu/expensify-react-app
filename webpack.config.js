const path = require ( 'path' )

module.exports = {

    entry: './src/app.js',
    output: {
        path: path.resolve ( __dirname, 'public/scripts' ),
        filename: 'bundle.js'
    },

    // babel configuration
    module: {
        rules: [ {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [ 'env', 'react' ],
                    plugins: [ 'transform-class-properties', 'transform-object-rest-spread' ]
                }
            }
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        } ]
    },

    // webpack-dev-server configuration
    devServer: {
        contentBase: path.resolve ( __dirname, 'public' ),
        publicPath: '/scripts/',
        historyApiFallback: true
    },

    // configure source map
    devtool: 'source-map'

}