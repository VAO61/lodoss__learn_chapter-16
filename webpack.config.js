const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, ...argv) => {
  const isProduction = argv[0].mode === 'production';

  return {
    // need abs path
    // resolve: {
    //   modules: [path.resolve(__dirname, './src'), 'node_modules'],
    //   extensions: ['.js']
    // },
    entry: {
      index: './src/js/index.js',
      fromevent: './src/js/about/entryRx_fromEvent.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js?[hash]'
    },
    devtool: isProduction ? 'none' : 'inline-source-map',
    devServer: {
      hot: true,
      inline: true,
      open: true,
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
        chunks: ['fromevent']
      })
    ]
  };
};
