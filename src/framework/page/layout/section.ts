import {element, ElementFinder, Locator} from "protractor";

export class Section {

    root: ElementFinder;

    constructor(rootLocator: Locator) {
        this.root = element(rootLocator);
    }

    getElement(childElementLocator: Locator): ElementFinder {
        return this.root.element(childElementLocator);
    }

    /**
     * Gets an element from anywhere in the document. This should not be used
     *
     * @param childElementLocator
     * @deprecated : Use a proper section root in the module page object and then use <code>getChildElement</code>
     */
    findElement(childElementLocator: Locator): ElementFinder {
        return element(childElementLocator);
    }
}