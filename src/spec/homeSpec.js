
// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {

    beforeAll(function(){
        browser.get('http://www.angularjs.org');
    });

    it('should greet the named user', () => {
        expect(browser.getTitle()).toBe("AngularJS — Superheroic JavaScript MVW Framework");
    });
});