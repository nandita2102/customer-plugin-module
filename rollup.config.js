import angular from 'rollup-plugin-angular';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import commonjs from 'rollup-plugin-commonjs';

export default [{
  input: 'src/main.ts',
  output: {
    file: '../dynamic-pluggable-store-manager/src/assets/plugins/customer-plugin.js',
    format: 'umd',
    name: 'customer-plugin'
  },
  plugins: [
    angular(),
    resolve({
      jsnext: true,
      main: true,
      // pass custom options to the resolve plugin
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      },
    }),
    typescript({
      typescript: require('typescript')
    }),
    commonjs()
  ],
  external: [
    "@angular/animations",
    "@angular/cdk",
    "@angular/common",
    "@angular/compiler",
    "@angular/core",
    "@angular/forms",
    "@angular/material",
    "@angular/router",
    "hammerjs",
    "rxjs",
    "tslib",
    "zone.js"
  ]
}]