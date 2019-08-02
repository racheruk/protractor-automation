
// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {

    beforeAll(async function(){
        await browser.get('http://www.angularjs.org');
    });

    it('should greet the named user', async function(){
        await expect(browser.getTitle()).toBe("AngularJS — Superheroic JavaScript MVW Framework");
    });
});