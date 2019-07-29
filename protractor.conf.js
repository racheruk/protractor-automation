exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: [ 'src/spec/*' ],
    onPrepare() {
        require('ts-node').register({
            project: require('path').join(__dirname, './tsconfig.json')
        });
    }
};