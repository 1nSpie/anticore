import {
  Controller,
  Get,
  Query,
  Res,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { existsSync } from 'fs';

@Controller('api/video')
export class VideoController {
  private readonly VIDEO_DIR = join(process.cwd(), 'public', 'videos');

  @Get()
  async getVideo(@Query('name') name: string, @Res() res: Response) {
    const filePath = join(this.VIDEO_DIR, name);

    if (!existsSync(filePath)) {
      throw new NotFoundException(`Видео "${name}" не найдено`);
    }

    res.header('Content-Type', 'video/mp4');
    res.header('Content-Disposition', 'inline'); // чтобы проигрывалось inline, а не скачивалось
    return res.status(HttpStatus.OK).sendFile(filePath);
  }
}
