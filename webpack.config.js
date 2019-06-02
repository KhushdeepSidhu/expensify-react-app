const path = require ( 'path' )
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = ( env ) => {

    const isProduction = env === 'production'
    const CSSExtract = new MiniCssExtractPlugin( {
        filename: 'styles.css'
      } )

    return {
        entry: './src/app.js',
        output: {
            path: path.resolve ( __dirname, 'public/scripts' ),
            filename: 'bundle.js'
        },
    
        // babel configuration
        module: {
            rules: [ {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [ {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            } ]
        },

        plugins: [
            CSSExtract
        ],
    
        // webpack-dev-server configuration
        devServer: {
            contentBase: path.resolve ( __dirname, 'public' ),
            publicPath: '/scripts/',
            historyApiFallback: true
        },
    
        // configure source map
        devtool: isProduction ? 'source-map' : 'inline-source-map'
    }
}









//  Jest is not working ( unable to process the import statement ) when we do the babel configuration inside webpack but works when use the configuration inside .babelrc
    // {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     use: {
    //         loader: 'babel-loader',
    //         options: {
    //             presets: [ 'env', 'react' ],
    //             plugins: [ 'transform-class-properties', 'transform-object-rest-spread' ]
    //         }
    //     }
    // }