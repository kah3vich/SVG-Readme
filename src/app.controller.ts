import { Controller, Get, Header, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  @Get('/')
  @Header('content-type', 'image/svg+xml')
  getTitle(): string {
    return AppService.getSubtitle('Hello');
  }

  // @Get('/subtitle')
  // @Header('content-type', 'image/svg+xml')
  // getSubtitle(@Query('subtitle') subtitle: string) {
  //   return AppService.getSubtitle(subtitle);
  // }
}
