import { Injectable } from '@nestjs/common';
import { TReadmeParams } from './types';

@Injectable()
export class AppService {
  getReadme(params: TReadmeParams): string {
    if (params.content) {
      if (params.type === 'title') {
        return this.getSvg(params.content, 45, 600);
      }
      if (params.type === 'subtitle') {
        return this.getSvg(params.content, 25, 500);
      }
      if (params.type === 'description') {
        return this.getSvg(
          params.content.split('<br>').join('<br>|space|<br>').split('<br>'),
          25,
          500,
        );
      }
    }
  }

  getSvg(content: string | string[], size: number, weight: number): string {
    if (typeof content === 'object') {
      let result = '';
      result += `
        <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" fill="none" data-reactroot="">
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
      `;

      content.forEach((el) => {
        if (el === '|space|') {
          result += '<br />';
        } else {
          result += el;
        }
      });
      result += `</div>
              <style>
                  #readme {
                      font-family: 'Martian Mono', monospace;
                      width: 100%;
                      color: #61dafb;
                      font-size: ${size}px;
                      font-weight: ${weight};
                      line-height: ${size + 5}px;
                      letter-spacing: -1px;
                      text-align: left;
                  }
              </style>
            </div>
          </foreignObject>
        </svg>
      `;

      return result;
    }

    return `
    <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" fill="none" data-reactroot="">
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
          <div id="readme">${content}</div>
          <style>
              #readme {
                  font-family: 'Martian Mono', monospace;
                  width: 100%;
                  color: #61dafb;
                  font-size: ${size}px;
                  font-weight: ${weight};
                  line-height: ${size + 5}px;
                  letter-spacing: -1px;
                  text-align: center;
              }
          </style>
        </div>
      </foreignObject>
    </svg>
  `;
  }
}
