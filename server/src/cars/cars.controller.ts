import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  findAllBrand() {
    return this.prisma.brand.findMany();
  }
}
