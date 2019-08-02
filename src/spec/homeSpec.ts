import {browser, by} from "protractor";
import {Home} from "../framework/page/module/home";
import {Tutorial} from "../framework/page/module/tutorial";

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', function() {

    let angularHomepage: Home = new Home();
    let tutorialPage: Tutorial = new Tutorial();

    beforeAll(async function(){
        await browser.get('http://www.angularjs.org');
    });

    it('should greet the named user', async function(){
        await angularHomepage.setName('Julie');
        // @ts-ignore
        await expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
    });

    it('Header should have site link', async function(){
        await expect(angularHomepage.header.siteLink.isPresent()).toBeTruthy();
    });

    it('User is able to navigate to the Tutorial page', async function(){
        await angularHomepage.header.goToTutorial();
        await expect(tutorialPage.getDefaultTutorialTitle()).toContain('PhoneCat Tutorial App');
    })
});