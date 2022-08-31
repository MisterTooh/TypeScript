import { PowerService } from '../power/power.service';
export declare class DiskService {
    private powerService;
    constructor(powerService: PowerService);
    getData(): string;
}
