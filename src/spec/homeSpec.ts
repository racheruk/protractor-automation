import {browser, by} from "protractor";
import {Home} from "../framework/page/module/home";
import {Tutorial} from "../framework/page/module/tutorial";

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {

    let angularHomepage: Home = new Home();
    let tutorialPage: Tutorial = new Tutorial();

    beforeAll(function(){
        browser.get('http://www.angularjs.org');
    });

    it('should greet the named user', () => {
        angularHomepage.setName('Julie');
        expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
    });

    it('1Header should have site link', () => {
        expect(angularHomepage.header.siteLink.isPresent()).toBeTruthy();
    });

    it('User is able to navigate to the Tutorial page', () => {
        angularHomepage.header.goToTutorial();
        expect(tutorialPage.getDefaultTutorialTitle()).toContain('PhoneCat Tutorial App');
    })
});