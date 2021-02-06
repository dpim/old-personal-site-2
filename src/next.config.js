const webpack = require('webpack');
const isProd = (process.env.NODE_ENV || 'production') === 'production';
const assetPrefix = isProd ? '/dpim.github.io' : '';

module.exports = {
    exportTrailingSlash: true,
    exportPathMap: () => {
        return {
            '/': { page: '/' }
        };
    },
    assetPrefix: assetPrefix,   
    webpack: (config) => {
        config.module.rules.push(
            {
                test: /\.md$/,
                use: 'raw-loader'
            }
        );
        config.plugins.push(
            new webpack.DefinePlugin({
              'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix)
            })
        );
        return config;
    }
}
