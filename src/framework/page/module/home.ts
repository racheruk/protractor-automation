import {by, ElementFinder} from 'protractor';
import {Page} from "../page";

export class Home extends Page {

    nameInput: ElementFinder;
    greeting: ElementFinder;

    constructor() {
        super();
        this.nameInput = this.main.getElement(by.model('yourName'));
        this.greeting = this.main.getElement(by.binding('yourName'));
    }

    setName(name: string) {
        this.nameInput.sendKeys(name);
    }

    getGreeting(): any {
        return this.greeting.getText();
    }
}