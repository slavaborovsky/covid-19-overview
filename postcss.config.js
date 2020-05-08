const purgecss = require('@fullhuman/postcss-purgecss');

const purgeCssOptions = {
	content: ['./public/**/*.html', './src/**/*.js', './src/**/*.jsx'],

	defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
};

module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		...(process.env.NODE_ENV === 'production' ? [purgecss(purgeCssOptions)] : []),
	],
};
