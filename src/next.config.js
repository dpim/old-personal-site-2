module.exports = {
    exportTrailingSlash: true,
    exportPathMap: () => {
        return {
            '/': { page: '/' }
        };
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        });
        return config;
    }
}
