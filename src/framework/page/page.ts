import {Header} from "./layout/1.header/header";
import {Footer} from "./layout/3.footer/footer";
import {Content} from "./layout/2.content/content";

export class Page {
    header: Header;
    content: Content;
    footer: Footer;
    constructor(mainContentRootLocator) {
        this.header = new Header();
        this.content = new Content(mainContentRootLocator);
        this.footer = new Footer();
    }
}