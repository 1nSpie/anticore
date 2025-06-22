import { PrismaService } from 'src/prisma.service';
export declare class BrandsController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAllCarWithBrand(id: string): import(".prisma/client").Prisma.PrismaPromise<({
        CarClass: {
            id: number;
            basePrice: number;
            complexPrice: number;
        } | null;
    } & {
        id: number;
        model: string;
        brandId: number | null;
        classId: number | null;
    })[]>;
}
