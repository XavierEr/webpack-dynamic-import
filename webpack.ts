import { resolve } from 'path';

import type { Configuration } from 'webpack';

const config: Configuration = {
  mode: 'production',
  
  entry: './src/index.ts',

  output: {
    chunkFilename: '[name].[chunkhash:8].bundle.js',
    filename: '[name].[fullhash:8].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      {
        test: /\.[jt]s?$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: resolve(__dirname, 'babel.config.json')
            }
          }
        ]
      }
    ]
  },
};

export default config;