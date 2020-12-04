// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	plugins: require('@sveltejs/snowpack-config').plugins.concat(
		'@snowpack/plugin-typescript'
	),
	mount: {
		'src/components': '/_components',
		'src/helpers': '/_helpers',
		'src/stores': '/_stores',
	},
	alias: {
		'$components': './src/components',
		'$helpers': './src/helpers',
		'$stores': './src/stores',
	}
};