export declare class TestController {
    checkFile(): {
        exists: boolean;
        path: string;
        error?: undefined;
    } | {
        exists: boolean;
        error: any;
        path?: undefined;
    };
}
