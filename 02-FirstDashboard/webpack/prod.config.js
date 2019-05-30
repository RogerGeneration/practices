const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[chunkhash]_[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../src/components/'),
      Modules: path.resolve(__dirname, '../src/modules/'),
    },
  },
  devServer: {
    contentBase: '../dist',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              localIdentName: '[local]--[hash:base64:5]',
              modules: true,
              camelCase: true
            }
          },
          {
            loader: require.resolve('sass-loader'),
            options: {
              discardDuplicates: true,
              sourceMap: false,
              // This enables local scoped CSS based in CSS Modules spec
              modules: true,
              includePaths: ['node_modules', 'src']
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
  ],
  devtool: 'inline-source-map',
};
