import { createRequire } from 'node:module'
import typescript from '@rollup/plugin-typescript'
import sizes from 'rollup-plugin-sizes'
import terser from '@rollup/plugin-terser'

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

export default {
	input: 'src/index.ts',
	output: [
		{ file: pkg.main, format: 'cjs', interop: 'auto' },
		{ file: pkg.module, format: 'es' },
	],
	external: ['react', 'anchorme'],
	plugins: [
		typescript({ tsconfig: './tsconfig.build.json' }),
		terser(),
		sizes(),
	],
}
