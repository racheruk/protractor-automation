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
    },
    onComplete() {
        browser.driver.close().then(function(){
            browser.driver.quit().then(() => {
                console.log("Shutdown complete");
            });
        });
    }
};