#  `How Modules and Dependency Injection Work Together`

This Project will imitate a simple computer as below illustrated.
```
CPU ----.
        |_ POWER SUPPLY
DISK----:


       [    Computer Module   ]
       [  Computer Controller ]
       [        run()         ]
          ________|_________
         |                  |
 [  CPU Module ]     [  DISK Module ]
 [ CPU Service ]     [ Disk Service ]
 [  compute()  ]     [   getData()  ]
         |________ _________|
                  |
         [   Power Module   ]
         [   Power Service  ]
         [   supplyPower    ]
```

-   We will model a simple computer so we can show how dependency injection comes into play.
-   See  Above figure.
-   Heirarchy of modules: Computer Module depends on CPU and Disk Module and CPU and Disk depends oon Power Module.
-   Each Module has a service that depends or controller that relies on some other service.

##  `Requirements`

In terminal:
```
nest new di
>npm
```

1.  Delete all files in `/src/` except for `main.ts`.

2.  Generate all Modules and Services in terminal:
    -   `nest g module computer`
    -   `nest g module cpu`
    -   `nest g module disk`
    -   `nest g module power`

3.  Now generate all services:
    -   `nest g service cpu`
    -   `nest g service power`
    -   `nest g service disk`

4.  Generate Controller:
    -   `nest g controller computer`

5. In `/src/main.ts` import `ComputerModule` and change line `#5` `(appModule)`

## `How to share different services`

Note: See `/src/power`, `/src/cpu`, `/src/disk`, `/src/computer`

Sharing Code between Services:

1. Add `PowerService` to the `PowerModule` list of exports by adding `exports: [PowerService]` line `#6` in `/src/power/power.modulets`.

2. Import the `PowerModule` into the `CpuModule` by adding `imports: [PowerModule]` line `#6` in `/src/cpu/cpu.module.ts`.

3. Define Constructor method on `CpuService` and add `PowerService` into it's argument list.

4. Add `imports: [CpuModule, DiskModule]` line `#7`  to `/src/computer/computer.module.ts`

5. See `/src/computer/computer.controller.ts/`

Note: We no longer have to import `PowerModule` to the `ComputerModule` since we already imported the dependencies into `CpuModule` and `DiskModule`.

Repeat this process for each module and remember to include the import statements at the top of `computer.controller.ts`

## `Conclusion`

Focusing on Power and CPU Module:

- We  create a power module and list powerservice in a array  of providers which creates our DI Container.
- Our container lists all our classes annd dependencies.
- By adding exports, which gives our container a list of all the different classes which can bbe used in other containers or modules.
- Whenever we decide to import the power module into other modules, we add the power module listings into the CPU Module DI Conntainer, which makes it available to all other services within the CPU Module DI Container.
- In reality it is all in one DI container but is all scoped within their respective modules to limit what classes can see in other classes.