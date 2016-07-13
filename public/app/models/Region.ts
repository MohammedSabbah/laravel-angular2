export class Region {
    region_id: number;
    region_name: string;
    region_url: string;
    region_order: number;
    
    constructor(region_id, region_name, region_url, region_order) {
        this.region_id = region_id;
        this.region_name = region_name;
        this.region_url = region_url;
        this.region_order = region_order;
    }
}