import {Page} from "../page";
import {by, ElementFinder} from "protractor";
import {promise as wdpromise} from 'selenium-webdriver';

export class Tutorial extends Page{

    leftNav: ElementFinder;
    tutorialContent: ElementFinder;

    constructor(){
        super(by.css('div.main-grid.main-body-grid'));
        this.leftNav = this.content.main.findElementInSection(by.css('div.main-grid.main-body-grid div.grid-left'));
        this.tutorialContent = this.content.main.findElementInSection(by.css('div.main-grid.main-body-grid div.grid-right'));
    }

    getDefaultTutorialTitle(): wdpromise.Promise<string> {
        return this.tutorialContent.element(by.css('#phonecat-tutorial-app')).getText();
    }
}