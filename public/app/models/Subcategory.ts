export class Subcategory {
    sc_id: number;
    sc_title: string;
    sc_link: string;
    sc_text: string;
    sc_order: number;
    
    constructor(sc_id, sc_title, sc_link, sc_text, sc_order) {
        this.sc_id = sc_id;
        this.sc_title = sc_title;
        this.sc_link = sc_link;
        this.sc_text = sc_text;
        this.sc_order = sc_order;
    }
}