// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	plugins: require('@sveltejs/snowpack-config').plugins.concat(
		'@snowpack/plugin-typescript'
	),
	mount: {
		'src/components': '/_components',
		'src/stores': '/_stores',
		'src/helpers': '/_helpers',
	},
	alias: {
		'$components': './src/components',
		'$stores': './src/stores',
		'$helpers': './src/helpers',
	}
};