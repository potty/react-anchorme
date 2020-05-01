import typescript from 'rollup-plugin-typescript2'
import sizes from 'rollup-plugin-sizes'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
	input: 'src/index.ts',
	output: [
		{ file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' },
	],
	external: ['react', 'anchorme'],
	plugins: [typescript(), terser(), sizes()],
}
