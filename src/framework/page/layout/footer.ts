import {by} from "protractor";
import {Section} from "./section";

export class Footer extends Section {
    constructor() {
        super(by.css('.footer'))
    }
}