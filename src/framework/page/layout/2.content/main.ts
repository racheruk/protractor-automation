import {Locator} from "protractor";
import {Section} from "../section";

export class Main extends Section {
    constructor(parentLocator: Locator, sectionRootLocator: Locator) {
        super(parentLocator, sectionRootLocator);
    }
}