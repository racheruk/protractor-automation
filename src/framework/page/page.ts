import {Header} from "./layout/header";
import {Main} from "./layout/main";
import {Footer} from "./layout/footer";

export class Page {
    header: Header;
    main: Main;
    footer: Footer;
    constructor() {
        this.header = new Header();
        this.main = new Main();
        this.footer = new Footer();
    }
}