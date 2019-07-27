import {by, ElementFinder} from "protractor";
import {Action} from "../../browse/action";
import {Section} from "./section";

export class Header extends Section {

    root: ElementFinder;
    siteLink: ElementFinder;
    learnLink: ElementFinder;

    constructor(){
        super(by.css('.header'));
        this.siteLink = this.root.element(by.css('a[href="https://angularjs.org"]'));
        this.learnLink = this.root.element(by.linkText('Learn'));
    }

    goToLearn() {
        Action.click(this.learnLink);
    }
}

