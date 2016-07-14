export class Thumbnail {
    esc_id: number;
    esc_age: number;
    esc_img: string;
    esc_title: string;
    esc_available: string;
    
    constructor(esc_id, esc_age, esc_img, esc_title, esc_available) {
        this.esc_id = esc_id;
        this.esc_age = esc_age;
        this.esc_img = esc_img;
        this.esc_title = esc_title;
        this.esc_available = esc_available
    }
}