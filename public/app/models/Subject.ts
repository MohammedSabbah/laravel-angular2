export class Subject {
    subject_id: number;
    subject_title: string;
    subject_desc: string;
    subject_img: string;
    
    constructor(subject_id, subject_title, subject_desc, subject_img) {
        this.subject_id = subject_id;
        this.subject_title = subject_title;
        this.subject_desc = subject_desc;
        this.subject_img = subject_img;
    }
}