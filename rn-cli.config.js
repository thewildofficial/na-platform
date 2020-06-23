const path = require('path');

module.exports = {
    resolver: {
        extraNodeModules: require('node-libs-react-native'),
    },
    getTransformModulePath() {
        return require.resolve('react-native-typescript-transformer');
    },
    getSourceExts() {
        return ['ts', 'tsx'];
    },
    watchFolders: [
        path.resolve(__dirname, './src'),
    ],
    getProjectRoots() {
        return [
            __dirname,
            path.join(__dirname, 'node_modules'),
            path.join(__dirname, './src'),
        ];
    },
};