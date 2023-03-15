import { Controller, Get, Header, Query } from '@nestjs/common';
import { AppService } from './app.service';
import type { TReadmeToSvgParams } from './types';

@Controller('readme')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/svg')
  @Header('content-type', 'image/svg+xml')
  getSvg(@Query() params: TReadmeToSvgParams): string | Error {
    return this.appService.getSvg(params);
  }
}
