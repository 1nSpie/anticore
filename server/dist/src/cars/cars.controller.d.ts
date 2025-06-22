import { PrismaService } from 'src/prisma.service';
export declare class CarsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllBrand(): import(".prisma/client").Prisma.PrismaPromise<{
        name: string;
        id: number;
    }[]>;
}
