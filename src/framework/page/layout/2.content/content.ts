import {by, Locator} from "protractor";
import {Section} from "../section";
import {Main} from "./main";

export class Content extends Section {
    private static contentRootLocator: Locator = by.css('.container[role="main"]');
    main: Main;
    constructor(mainContentRootLocator: Locator) {
        super(by.css('body'), Content.contentRootLocator);
        this.main = new Main(Content.contentRootLocator, mainContentRootLocator);
    }
}
