const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join, resolve } = require('path');

module.exports = {
  output: {
    path: join(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@reflexia/di': resolve(__dirname, '../../libs/di/src/index.ts'),
      '@reflexia/http': resolve(__dirname, '../../libs/http/src/index.ts'),
      '@reflexia/logger': resolve(__dirname, '../../libs/logger/src/index.ts'),
      '@reflexia/foo': resolve(__dirname, '../../libs/foo/src/index.ts'),
      '@reflexia/bar': resolve(__dirname, '../../libs/bar/src/index.ts'),
      '@reflexia/baz': resolve(__dirname, '../../libs/baz/src/index.ts'),
      '@reflexia/core': resolve(__dirname, '../../libs/core/src/index.ts'),
    },
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets'],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: false, // Don't generate package.json
      externalDependencies: 'none', // Bundle all dependencies
    }),
  ],
};
