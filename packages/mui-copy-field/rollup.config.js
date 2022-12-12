import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import nodeGlobals from 'rollup-plugin-node-globals';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import typescript from '@rollup/plugin-typescript';
import terser  from '@rollup/plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';

const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
}
const babelOptions = {
  exclude: /node_modules/,
  // We are using @babel/plugin-transform-runtime
  extensions: ['.js', '.ts', '.tsx'],
  configFile: '../../babel.config.json',
  babelHelpers: 'runtime'
};
const nodeOptions = {
  extensions: ['.js', '.tsx', '.ts'],
};
const typescriptOptions = {
  tsconfig: `./tsconfig.json`,
  declaration: true,
  declarationDir: '.',
  "emitDeclarationOnly": true,
  "declarationMap": true,
};

export default {
  input: `./src/index.ts`,
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
    excludeDependenciesFromBundle({peerDependencies: true}),
    babel(babelOptions),
    commonjs(commonjsOptions),
    replace({ preventAssignment: true, 'process.env.NODE_ENV': JSON.stringify('production') }),
    nodeGlobals(),
    terser(),
    // visualizer({
    //   filename: 'bundle-analysis.html',
    //   open: true,
    // }),
  ]
}
