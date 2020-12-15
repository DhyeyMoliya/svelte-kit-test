// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	plugins: [
		...require('@sveltejs/snowpack-config').plugins,
		'@snowpack/plugin-typescript'
	],
	mount: {
		'src/client': '/_client',
		'src/server': '/_server',
		'src/components': '/_components',
	},
	alias: {
		'$client': './src/client',
		'$server': './src/server',
		'$components': './src/components',
	}
};