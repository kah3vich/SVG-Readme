import { HttpException, Injectable } from '@nestjs/common';
import { IndexDto } from './dto/index.dto';
import { TReadmeToSvgContentParams, TReadmeToSvgParams } from './types';

@Injectable()
export class AppService {
	getSvg(params: TReadmeToSvgParams): string | Error {
		if (params.content) {
			if (params.type === 'custom') {
				return this.getSvgContent({
					content: (params.content as string).split('||').join(' '),
					size: params.size,
					weight: params.weight,
					color: params.color,
					align: params.align,
				});
			}
			if (params.type === 'title') {
				return this.getSvgContent({
					content: (params.content as string).split('||').join(' '),
					size: 45,
					weight: 600,
				});
			}
			if (params.type === 'subtitle') {
				return this.getSvgContent({
					content: (params.content as string).split('||').join(' '),
					size: 25,
					weight: 500,
				});
			}
			if (params.type === 'span') {
				return this.getSvgContent({
					content: (params.content as string).split('||').join(' '),
					size: 18,
					weight: 500,
				});
			}
			if (params.type === 'description') {
				return this.getSvgContent({
					content: (params.content as string)
						.split('||')
						.join(' ')
						.split('<br>')
						.join('<br>|space|<br>')
						.split('<br>'),
					size: 25,
					weight: 500,
				});
			}
		}
	}

	getSvgContent({
		content,
		size,
		weight,
		color = '#61dafb',
		align,
	}: TReadmeToSvgContentParams): string {
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

			content.forEach(el => {
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
                      color: ${color};
                      font-size: ${size}px;
                      font-weight: ${weight};
                      line-height: ${+size + 5}px;
                      letter-spacing: -1px;
                      text-align: ${align || 'left'};
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
                  color: ${color};
                  font-size: ${size}px;
                  font-weight: ${weight};
                  line-height: ${+size + 5}px;
                  letter-spacing: -1px;
                  text-align: ${align || 'center'};
              }
          </style>
        </div>
      </foreignObject>
    </svg>
  `;
	}

	santa(dto: IndexDto) {
		if (dto.type === 'first') {
			if (+dto.value >= 795) return { status: 'success' };

			throw new HttpException({ message: 'Неправильно' }, 400);
		}

		if (dto.type === 'second') {
			if (+dto.value >= 6) return { status: 'success' };

			throw new HttpException({ message: 'Неправильно' }, 400);
		}

		if (dto.type === 'third') {
			if (+dto.value === 322) return { status: 'success' };

			throw new HttpException({ message: 'Неправильно' }, 400);
		}

		if (dto.type === 'result') {
			return { status: 'success', message: 'Около сейфа не смотрел ?' };
		}

		throw new HttpException({ message: 'Ошибка запроса' }, 400);
	}
}
