import { initialRender } from "./js/initialRender.js";
import { listeners } from "./js/listeners.js";

class Invoice {
    init() {
        console.log("App start");
        initialRender();
        listeners();
    }
};

export default Invoice;
