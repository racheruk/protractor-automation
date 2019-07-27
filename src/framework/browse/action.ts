import {browser, protractor} from "protractor";
import {createWriteStream, mkdir} from "fs";
import * as path from "path";

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
                Action.waitForElementTobePresent(elementToClick);
            } else {
                Action.waitForElementTobeClickable(elementToClick);
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
    static waitForElementTobeClickable(element, waitTimeInMillis = 20 * 1000) {
        var EC = protractor.ExpectedConditions;
        var isClickable = EC.elementToBeClickable(element);
        browser.wait(isClickable, waitTimeInMillis);
    };

    /**
     * Waits for element to be present
     *
     * @param element
     * @param waitTimeInMillis
     */
    static waitForElementTobePresent(element, waitTimeInMillis = 20 * 1000) {
        var EC = protractor.ExpectedConditions;
        var isClickable = EC.presenceOf(element);
        browser.wait(isClickable, waitTimeInMillis);
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

    /**
     *
     */
    static screenshot(fileName: string = 'screenshot' + new Date().getTime() +'.png') {
        browser.takeScreenshot().then(function(screenshot){
            let outputFolderPath = path.resolve(__dirname, '..', '..', '..', 'target');
            mkdir(outputFolderPath, {recursive: true}, (e) => {});
            let screenshotPath = path.resolve(outputFolderPath, fileName);
            var stream = createWriteStream(screenshotPath);
            stream.write(new Buffer(screenshot, 'base64'));
            stream.end();
        });
    }
}