import {by, ElementFinder} from 'protractor';
import {Page} from "../page";

export class Home extends Page {

    nameInput: ElementFinder;
    greeting: ElementFinder;

    constructor() {
        super(by.css('div[app-run="hello.html"]'));
        this.nameInput = this.content.main.findElementInSection(by.model('yourName'));
        this.greeting = this.content.main.findElementInSection(by.binding('yourName'));
    }

    setName(name: string) {
        this.nameInput.sendKeys(name);
    }

    getGreeting(): any {
        return this.greeting.getText();
    }
}