import {browser, ElementFinder, protractor} from "protractor";
import {createWriteStream, mkdir} from "fs";
import * as path from "path";

export class Action {

    private constructor() { }

    /**
     * Waits for the element and then clicks
     *
     * @param elementToClick
     */
    static async click(elementToClick: ElementFinder) {
        await elementToClick.getAttribute('type').then(async function(value){
            if (('radio' === value) || ('checkbox' === value)) {
                await Action.waitForElementTobePresent(elementToClick);
            } else {
                await Action.waitForElementTobeClickable(elementToClick);
            }
        });
        await elementToClick.click();
    }

    /**
     * Waits for element to be clickable
     *
     * @param element
     * @param waitTimeInMillis
     */
    static async waitForElementTobeClickable(element, waitTimeInMillis = 20 * 1000) {
        var EC = protractor.ExpectedConditions;
        var isClickable = EC.elementToBeClickable(element);
        await browser.wait(isClickable, waitTimeInMillis);
    };

    /**
     * Waits for element to be present
     *
     * @param element
     * @param waitTimeInMillis
     */
    static async waitForElementTobePresent(element, waitTimeInMillis = 20 * 1000) {
        var EC = protractor.ExpectedConditions;
        var isClickable = EC.presenceOf(element);
        await browser.wait(isClickable, waitTimeInMillis);
    };

    /**
     * Select (or tick) the checkbox if its not selected
     *
     * Note that if the checkbox is already in selected condition then it wont do anything
     *
     * @param elementToClick
     */
    static async selectCheckbox(elementToClick) {
        await elementToClick.getAttribute('checked').then(async function(value) {
            if (!value) {
                await this.click(elementToClick);
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
    static async deselectCheckbox(elementToClick) {
        await elementToClick.getAttribute('checked').then(async function(value) {
            if (value) {
                await this.click(elementToClick);
            }
        });
    };

    /**
     *
     */
    static async screenshot(fileName: string = 'screenshot' + new Date().getTime() +'.png') {
        await browser.takeScreenshot().then(function(screenshot){
            let outputFolderPath = path.resolve(__dirname, '..', '..', '..', 'target');
            mkdir(outputFolderPath, {recursive: true}, (e) => {});
            let screenshotPath = path.resolve(outputFolderPath, fileName);
            var stream = createWriteStream(screenshotPath);
            stream.write(new Buffer(screenshot, 'base64'));
            stream.end();
        });
    }
}