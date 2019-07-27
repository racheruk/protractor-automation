import {browser, protractor} from "protractor";

export class Action {

    private constructor() { }

    /**
     * Waits for the element and then clicks
     *
     * @param elementToClick
     */
    static click(elementToClick) {
        elementToClick.getAttribute('type').then(function(value){
            if (('radio' === value) || ('checkbox' === value)) {
                this.waitForElementTobePresent(elementToClick);
            } else {
                this.waitForElementTobeClickable(elementToClick);
            }
            elementToClick.click();
        });
    }

    /**
     * Waits for element to be clickable
     *
     * @param element
     * @param waitTimeInMillis
     */
    static waitForElementTobeClickable(element, waitTimeInMillis) {
        var EC = protractor.ExpectedConditions;
        var isClickable = EC.elementToBeClickable(element);
        browser.wait(isClickable, ((waitTimeInMillis) ? waitTimeInMillis : 20 * 1000));
    };

    /**
     * Waits for element to be present
     *
     * @param element
     * @param waitTimeInMillis
     */
    static waitForElementTobePresent(element, waitTimeInMillis) {
        var EC = protractor.ExpectedConditions;
        var isClickable = EC.presenceOf(element);
        browser.wait(isClickable, ((waitTimeInMillis) ? waitTimeInMillis : 20 * 1000));
    };

    /**
     * Select (or tick) the checkbox if its not selected
     *
     * Note that if the checkbox is already in selected condition then it wont do anything
     *
     * @param elementToClick
     */
    static selectCheckbox = function(elementToClick) {
        elementToClick.getAttribute('checked').then(function(value) {
            if (!value) {
                this.waitForAndClick(elementToClick);
            }
        });
    };

    /**
     * Deselect (or untick) the checkbox if its selected
     *
     * Note that if the checkbox is already in deselected condition then it wont do anything
     *
     * @param elementToClick
     */
    static deselectCheckbox = function(elementToClick) {
        elementToClick.getAttribute('checked').then(function(value) {
            if (value) {
                this.waitForAndClick(elementToClick);
            }
        });
    };
}