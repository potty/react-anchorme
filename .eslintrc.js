module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
		'prettier/@typescript-eslint',
		'prettier/react',
	],
	plugins: ['react', 'prettier', '@typescript-eslint'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
