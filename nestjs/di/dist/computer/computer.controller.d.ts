import { CpuService } from '../cpu/cpu.service';
import { DiskService } from '../disk/disk.service';
export declare class ComputerController {
    private cpuService;
    private diskService;
    constructor(cpuService: CpuService, diskService: DiskService);
    run(): (string | number)[];
}
