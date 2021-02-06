import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const config: webpack.Configuration = {

    entry: path.resolve(__dirname, '..', 'src'),
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "awesome-typescript-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.(png|jpe?g|gif)$/i,
                loader:'file-loader',
            }

        ]
    },
    plugins: [
        new webpack.ProgressPlugin(),
        // new CopyPlugin({
        //     patterns: [
        //         { from: 'assets/UMPLogo.png' , to: 'assets/UMPLogo.png'}
        //     ],
        // }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            // favicon: "./assets/icons8-curly-brackets-16.png"
        })
    ],
};

export default config;