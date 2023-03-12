import { Controller, Get, Header, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { TReadmeParams } from './types';

@Controller('/test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Header('content-type', 'image/svg+xml')
  getTest(): string {
    return `<svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" fill="none" data-reactroot="">
    <foreignObject width="100%" height="100%">
    <div xmlns="http://www.w3.org/1999/xhtml">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Martian+Mono:wght@100;200;300;400;500;600;700;800&amp;display=swap')

      * {
        margin: 0;
        box-sizing: content-box;
        font-family: 'Martian Mono', monospace;
      }
    </style>
    <div id="readme">
  Main goals of expansion <br /> - Help in finding low-quality code <br /> - Tips for refactoring, low-quality code <br /> - Highlighting duplicate code in the project <br /> - Removing unnecessary code ( console.log | debugger )</div>
          <style>
              #readme {
                  font-family: 'Martian Mono', monospace;
                  width: 100%;
                  color: #61dafb;
                  font-size: 25px;
                  font-weight: 500;
                  line-height: 30px;
                  letter-spacing: -1px;
                  text-align: left;
              }
          </style>
        </div>
      </foreignObject>
    </svg>`;
  }

  @Get('/readme')
  @Header('content-type', 'image/svg+xml')
  getReadme(@Query() params: TReadmeParams): string {
    return this.appService.getReadme(params);
  }
}
