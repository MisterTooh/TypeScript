import { PowerService } from '../power/power.service';
export declare class CpuService {
    private powerService;
    constructor(powerService: PowerService);
    compute(a: number, b: number): number;
}
