import {by} from "protractor";
import {Section} from "./section";

export class Main extends Section {
    constructor() {
        super(by.css('div.container[role="main"]'));
    }
}