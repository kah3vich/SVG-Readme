// import { Controller, Get, Header, Query } from '@nestjs/common';
// import { AppService } from './app.service';

import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   @Get('/title')
//   @Header('content-type', 'image/svg+xml')
//   getTitle(@Query('title' | 'subtitle') title: string): string {
//     if
//     return AppService.getSubtitle(title);
//   }

//   @Get('/subtitle')
//   @Header('content-type', 'image/svg+xml')
//   getSubtitle(@Query('subtitle') subtitle: string) {
//     return AppService.getSubtitle(subtitle);
//   }
// }

export type TReadmeParams = {
  type: 'title' | 'subtitle' | 'description';
};

@Controller('/readme')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(@Query() params: TReadmeParams): string {
    return this.appService.getReadme(params);
  }
}
