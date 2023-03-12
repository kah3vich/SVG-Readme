import { Controller, Get, Header, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/readme')
export class AppController {
  @Get('/title')
  @Header('content-type', 'image/svg+xml')
  getTitle(@Query('title') title: string): string {
    return AppService.getSubtitle(title);
  }

  // @Get('/subtitle')
  // @Header('content-type', 'image/svg+xml')
  // getSubtitle(@Query('subtitle') subtitle: string) {
  //   return AppService.getSubtitle(subtitle);
  // }
}
