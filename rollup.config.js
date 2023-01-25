import excludeDependenciesFromBundle from 'rollup-plugin-exclude-dependencies-from-bundle';
import postcss from 'rollup-plugin-postcss'
import {nodeResolve} from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import terser  from '@rollup/plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import * as fs from 'fs';
import path from 'path';

const PACKAGE_NAME = process.cwd();
const pkg = JSON.parse(fs.readFileSync(path.join(PACKAGE_NAME, 'package.json'), 'utf-8'));

const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
}
const extensions = ['.js', '.ts', '.tsx'];

const babelOptions = {
  exclude: /node_modules/,
  extensions,
  configFile: '../../babel.config.json',
  babelHelpers: 'runtime'
};
const nodeOptions = {
  extensions,
};
const typescriptOptions = {
  tsconfig: `${PACKAGE_NAME}/tsconfig.json`,
  declaration: true,
  declarationDir: '.',
  emitDeclarationOnly: true,
  declarationMap: true,
};

export default {
  input: `${PACKAGE_NAME}/src/index.ts`,
  external: [...Object.keys(pkg.peerDependencies), '@emotion/cache'],
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  plugins: [
    nodeResolve(nodeOptions),
    typescript(typescriptOptions),
    postcss({
      plugins: []
    }),
    excludeDependenciesFromBundle({peerDependencies: true}),
    babel(babelOptions),
    commonjs(commonjsOptions),
    terser(),
    // visualizer({
    //   filename: 'bundle-analysis.html',
    //   open: true,
    // }),
  ]
}
