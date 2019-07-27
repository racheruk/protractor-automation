import {by, ElementFinder} from "protractor";
import {Section} from "./section";

export class Main extends Section {
    id: string = 'main';
    contentRoot: ElementFinder;
    constructor(contentRootLocator) {
        super(by.css('.container[role="main"]'));
        this.contentRoot = this.getElement(contentRootLocator);
    }
}