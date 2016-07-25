// we can't use AppSettings, apparently there's another module
// using this same class name
export class AppSettingsConstants {
    public static get SHORTCODE(): string { 
        return '[shortcode]'; 
    }

    public static get PRICE(): string {
        return '[price]';
    }

    public static get TERMS(): string {
        return '[smallTerms]';
    }
}