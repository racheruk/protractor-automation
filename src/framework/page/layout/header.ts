import {by, ElementFinder} from "protractor";
import {Action} from "../../browse/action";
import {Section} from "./section";

export class Header extends Section {
    root: ElementFinder;
    siteLink: ElementFinder;
    learnLink: ElementFinder;
    tutorialLink: ElementFinder;

    constructor(){
        super(by.css('.header'));
        this.siteLink = this.root.element(by.css('a[href="https://angularjs.org"]'));
        this.learnLink = this.root.element(by.linkText('LEARN'));
        this.tutorialLink = this.root.element(by.linkText('Tutorial'));
    }

    goToTutorial() {
        Action.click(this.learnLink);
        Action.click(this.tutorialLink);
    }
}

