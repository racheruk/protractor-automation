import {browser, by} from "protractor";
import {Home} from "../framework/page/module/home";

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {

    let angularHomepage: Home;

    beforeAll(function(){
        browser.get('http://www.angularjs.org');
        angularHomepage = new Home();
    });

    it('should greet the named user', () => {
        angularHomepage.setName('Julie');
        expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
    });

    it('Header should have site link', () => {
        expect(angularHomepage.header.getElement(by.css('a[href*="angularjs.org"]')).isPresent()).toBeTruthy();
    });
});