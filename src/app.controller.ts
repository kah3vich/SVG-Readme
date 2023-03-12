import { Controller, Get, Header, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { TReadmeParams } from './types';

@Controller('readme')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Header('content-type', 'image/svg+xml')
  get(): string {
    return '';
  }

  @Get('/svg')
  @Header('content-type', 'image/svg+xml')
  getReadme(@Query() params: TReadmeParams): string {
    return this.appService.getReadme(params);
  }
}
