import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
	input: 'src/index.ts',
	output: [
		{
			file: pkg.module,
			format: 'es',
		},
	],
	external: ['react', 'anchorme'],
	plugins: [
		typescript({
			typescript: require('typescript'),
		}),
		terser(),
	],
}
