import {browser} from "protractor";
import {Action} from "./action";

/**
 * Holds logic to navigate between Angular and Non-Angular pages/tabs/windows
 */
export class Navigate {

    private constructor() { }

    /**
     * Click and navigate to a non-ng page in the same window
     *
     * @param elementToClick
     */
    static clickAndGoToNonNgPage(elementToClick) {
        browser.waitForAngularEnabled(false);
        Action.click(elementToClick);
    }

    /**
     * Navigate back to given URL (Ng page) from a Non-ng page in the same window
     *
     * @param mainUrl
     */
    static backToMainFromNonNgPage(mainUrl) {
        browser.get(mainUrl);
        browser.waitForAngularEnabled(true);
    }

    /**
     * Click the element and switch to the resultant Angular tab/window/Popup
     *
     * @param elementToCLick
     */
    static clickAndSwitchToPopupTabWindow(elementToCLick) {
        Action.click(elementToCLick);
        this.toPopupTabWindow();
    }

    /**
     * Close the current Angular tab/window/popup and switch to Main
     *
     */
    static closePopupTabWindow() {
        var handlePromise = browser.driver.getAllWindowHandles();
        handlePromise.then(function (handles) {
            browser.sleep(2 * 1000);
            var parentHandle = handles[0];
            if (handles.length > 1) {
                var popUpHandle = handles[1];
                browser.driver.switchTo().window(popUpHandle);
                browser.close();
            }
            browser.driver.switchTo().window(parentHandle);
        });
    }

    /**
     * Click the given element and switch to Non-Angular tab/window/popup
     * @param elementToCLick
     */
    static clickAndSwitchToNonNgPopupTabWindow(elementToCLick) {
        browser.waitForAngularEnabled(false);
        Action.click(elementToCLick);
        this.toPopupTabWindow();
    }

    /**
     * Close current Non-Angular tab/window/popup and switch to Main
     */
    static closeNonNgPopupTabWindow() {
        this.closePopupTabWindow();
        browser.waitForAngularEnabled(true);
    }

    /**
     * Navigate to tab/window/popup
     */
    private static toPopupTabWindow() {
        var handlePromise = browser.driver.getAllWindowHandles();
        handlePromise.then(function (handles) {
            browser.sleep(2 * 1000);
            if (handles.length <= 1) {
                console.error("ERROR : Can not find multiple windows! Are you sure a new popup or tab is open ?");
            }
            var popUpHandle = handles[1];
            browser.driver.switchTo().window(popUpHandle);
        });
    };
}