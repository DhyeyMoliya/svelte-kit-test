// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	plugins: require('@sveltejs/snowpack-config').plugins.concat(
		'@snowpack/plugin-typescript'
	),
	mount: {
		'src/client': '/_client',
		'src/server': '/_server',
		'src/components': '/_components',
		'src/stores': '/_stores',
	},
	alias: {
		'$clientHelpers': './src/client/helpers',
		'$controllers': './src/server/controllers',
		'$components': './src/components',
		'$stores': './src/stores',
	}
};