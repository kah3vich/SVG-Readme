import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('readme')
export class AppController {
  @Get('/title')
  getTitle(@Query('title') title: string): string {
    return AppService.getSubtitle(title);
  }

  @Get('/subtitle')
  getSubtitle(@Query('subtitle') subtitle: string) {
    return AppService.getSubtitle(subtitle);
  }
}
