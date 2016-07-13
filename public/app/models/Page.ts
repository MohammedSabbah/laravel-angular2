export class Page {
    page_id: number;
    page_title: string;
    page_url: string;
    
    constructor (page_id, page_title, page_url) {
        this.page_id = page_id;
        this.page_title = page_title;
        this.page_url = page_url;
    }
}