import { Injectable } from '@nestjs/common';

export type TReadmeParams = {
  type: 'title' | 'subtitle' | 'description';
  content: string;
};

@Injectable()
export class AppService {
  // static getSubtitle(subtitle: string): string {
  //   return `
  //   <svg xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" fill="none" data-reactroot="">
  //     <foreignObject width="100%" height="100%">
  //       <div xmlns="http://www.w3.org/1999/xhtml">
  //           <style>
  //             @import url('https://fonts.googleapis.com/css2?family=Martian+Mono:wght@100;200;300;400;500;600;700;800&amp;display=swap')

  //             * {
  //               margin: 0;
  //               box-sizing: content-box;
  //               font-family: 'Martian Mono', monospace;
  //             }
  //           </style>
  //           <div id="description">
  //             ${subtitle}
  //           </div>
  //           <style>
  //             #description {
  //               font-family: 'Martian Mono', monospace;
  //               width: 100%;
  //               color: #61dafb;
  //               font-size: 25px;
  //               font-weight: 500;
  //               line-height: 30px;
  //               letter-spacing: -1px;
  //               text-align: center;
  //             }
  //           </style>
  //         </div>
  //       </foreignObject>
  //     </svg>
  //   `;
  // }

  // static getTitle(title: string): string {

  // }
  getReadme(params: TReadmeParams): string {
    if (params.type === 'description') {
      return this.getSvg(params);
    }
  }
  getSvg(params: TReadmeParams): string {
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
            <div id="title">
                ${params.content}
            </div>
            <style>
                #title {
                    font-family: 'Martian Mono', monospace;
                    width: 100%;
                    color: #61dafb;
                    font-size: 45px;
                    font-weight: 600;
                    line-height: 40px;
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
