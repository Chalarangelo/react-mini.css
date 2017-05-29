var webpack = require('webpack');

module.exports = {
		entry: {
			Tab: __dirname + '/src/Tabs.js',
			lib: __dirname + '/src/lib.js'
		},
		output: {
				path: __dirname + '/dist',
				filename: '[name].js'
		},
		plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
		module: {
				loaders: [
						{
								test: /\.js$/,
								loader: 'babel-loader',
								query: {
										presets: ['react', 'es2015']
								}
						}
				]
		},
		stats: {
				colors: true
		},
		target: "node"
};
