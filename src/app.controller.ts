import { Controller, Get, Header, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { TReadmeParams } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/readme')
  @Header('content-type', 'image/svg+xml')
  getTitle(@Query() params: TReadmeParams): string {
    return this.appService.getReadme(params);
  }
}
