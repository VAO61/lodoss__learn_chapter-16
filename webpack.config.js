const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, ...argv) => {
  const isProduction = argv[0].mode === 'production';

  return {
    // need abs path
    resolve: {
      modules: [path.resolve(__dirname, './src'), 'node_modules']
      // extensions: ['.js']
    },
    entry: {
      index: './src/js/index.js',
      aboutRxJS_fromevent: './src/js/about/entryRx_fromEvent.js',
      aboutRxJS_operators: './src/js/about/entryRx_operators.js',
      aboutRxJS_streamFromArray: './src/js/about/entryRx_stream-from-array.js',
      aboutRxJS_streamFromPromise:
        './src/js/about/entryRx_stream-from-promise.js',
      aboutRxJS_map: './src/js/about/entryRx_map.js',
      aboutRxJS_pluck: './src/js/about/entryRx_pluck.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js?[hash]'
    },
    devtool: isProduction ? 'none' : 'inline-source-map',
    devServer: {
      hot: true,
      inline: true,
      // open: true,
      contentBase: './src'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader'
          },
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.html$/,
          use: ['html-loader']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css?[hash]'
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/html/index.html',
        chunks: ['index']
      }),
      new HtmlWebpackPlugin({
        filename: 'from-event.html',
        template: './src/html/about/from-event.html',
        chunks: ['aboutRxJS_fromevent']
      }),
      new HtmlWebpackPlugin({
        filename: 'operators.html',
        template: './src/html/about/operators.html',
        chunks: ['aboutRxJS_operators']
      }),
      new HtmlWebpackPlugin({
        filename: 'stream-from-array.html',
        template: './src/html/about/stream-from-array.html',
        chunks: ['aboutRxJS_streamFromArray']
      }),
      new HtmlWebpackPlugin({
        filename: 'map.html',
        template: './src/html/about/map.html',
        chunks: ['aboutRxJS_map']
      }),
      new HtmlWebpackPlugin({
        filename: 'pluck.html',
        template: './src/html/about/pluck.html',
        chunks: ['aboutRxJS_pluck']
      })
    ]
  };
};
