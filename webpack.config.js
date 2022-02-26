/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  stats: 'minimal',
  entry: { main: './src/index.tsx' },
  output: {
    path: path.join(__dirname, '/build'),
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
    compress: true,
    port: 7000,
    open: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      store: path.resolve(__dirname, 'src/store/'),
      components: path.resolve(__dirname, 'src/components/'),
      utils: path.resolve(__dirname, 'src/utils/'),
      pages: path.resolve(__dirname, 'src/pages/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      hooks: path.resolve(__dirname, 'src/hooks/'),
    },
  },
};
