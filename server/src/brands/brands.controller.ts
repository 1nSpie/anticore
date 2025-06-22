import { Controller, Get, Param } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Controller('brands')
export class BrandsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get(':id')
  findAllCarWithBrand(@Param('id') id: string) {
    const numericId = parseInt(id, 10);

    if (isNaN(numericId)) {
      throw new Error('ID бренда должен быть числом');
    }
    return this.prisma.car.findMany({
      where: {
        brandId: numericId,
      },
      include: {
        CarClass: true,
        Brand: false,
      },
    });
  }
}
