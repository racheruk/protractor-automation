import {element, ElementFinder, Locator} from "protractor";

export class Section {
    parent: ElementFinder;
    sectionRoot: ElementFinder;
    constructor(parentLocator: Locator, sectionRootLocator: Locator) {
        this.parent = element(parentLocator);
        this.sectionRoot = this.parent.element(sectionRootLocator);
    }

    /**
     * Get child element in the section "this.parent" refers to
     * @param childElementLocator
     */
    findElementInParent(childElementLocator: Locator): ElementFinder {
        return this.parent.element(childElementLocator);
    }

    /**
     * Get child element in the section "this.sectionRoot" refers to
     * @param childElementLocator
     */
    findElementInSection(childElementLocator: Locator): ElementFinder {
        return this.sectionRoot.element(childElementLocator);
    }

    /**
     * Gets an element from anywhere in the document. This should not be used
     *
     * @param childElementLocator
     * @deprecated : Use a proper section root in the module page object and then use <code>findElementInSection</code>
     */
    findElementOnPage(childElementLocator: Locator): ElementFinder {
        return element(childElementLocator);
    }
}