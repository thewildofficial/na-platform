const webpack = require('webpack');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = function override(config, env) {

    // Disable hot module warning in console
    config.resolve.alias['react-dom'] = '@hot-loader/react-dom';

    config.plugins = [
        ...config.plugins,

        // Disable react dev tools warning in console
        new webpack.DefinePlugin({
            '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })',
        }),

        new MonacoWebpackPlugin({
            // Available options are documented at 
            // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
            languages: ['javascript', 'html', 'css'],
        }),
    ];

    // Reduce HMR console messages
    config.devServer = {
        clientLogLevel: 'warning$',
    };

    return config;
};