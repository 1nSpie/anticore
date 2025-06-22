import { Module } from '@nestjs/common';

import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';
import { VideoController } from './video/video.controller';

@Module({
  imports: [CarsModule, BrandsModule],
  controllers: [VideoController],
  providers: [],
})
export class AppModule {}
