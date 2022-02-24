import { terser as pluginTerser } from 'rollup-plugin-terser';
import pluginTypescript from '@rollup/plugin-typescript';
import pluginCommonjs from '@rollup/plugin-commonjs';
import pluginNodeResolve from '@rollup/plugin-node-resolve';
import { babel as pluginBabel } from '@rollup/plugin-babel';
import * as path from 'path';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import pluginJson from '@rollup/plugin-json';
import pkg from './package.json';

const moduleName = "Snd"
const inputFileName = 'src/index.ts';

const banner = `
  /**
   * @license
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} License.
   */
`;

export default [
	{
		input: inputFileName,
		output: [
			{
				name: moduleName,
				file: "dist/browser/snd.js",
				format: 'iife',
				sourcemap: 'inline',
				banner
			},
			{
				name: moduleName,
				file: "dist/browser/snd.min.js",
				format: 'iife',
				sourcemap: 'inline',
				banner,
				plugins: [
					pluginTerser(),
				],
			}
		],
		plugins: [,
			pluginJson(),
			pluginTypescript(),
			pluginCommonjs({
				extensions: ['.js', '.ts'],
			}),
			pluginBabel({
				babelHelpers: 'bundled',
				configFile: path.resolve(__dirname, '.babelrc.js'),
			}),
			pluginNodeResolve({
				browser: true,
			}),
			nodePolyfills()
		],
	},

];