import {by, ElementFinder} from "protractor";
import {Action} from "../../../browse/action";
import {Section} from "../section";

export class Header extends Section {
    siteLink: ElementFinder;
    learnLink: ElementFinder;
    tutorialLink: ElementFinder;

    constructor(){
        super(by.css('body'), by.css('.header'));
        this.siteLink = this.findElementInSection(by.css('a[href="https://angularjs.org"]'));
        this.learnLink = this.findElementInSection(by.linkText('LEARN'));
        this.tutorialLink = this.findElementInSection(by.css('a[href*="/tutorial"]'));
    }

    async goToTutorial() {
        await Action.click(this.learnLink);
        await Action.click(this.tutorialLink);
    }
}

