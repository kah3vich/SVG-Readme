import { Injectable } from '@nestjs/common';
import { svgEnd, svgStart } from './constant';
import { SvgContentParams, SvgParams } from './types';
import { percentToUtf8Encoding, removeAllSymbol, utf8ToPercentEncoding } from './utils';

@Injectable()
export class AppService {
	svg(params: SvgParams): string | Error {
		const config = {
			custom: {
				size: params.size,
				weight: params.weight,
				color: params.color,
				align: params.align,
			},
			title: {
				content: params.content,
				size: 45,
				weight: 600,
			},
			subtitle: {
				size: 25,
				weight: 500,
			},
			span: {
				size: 18,
				weight: 500,
			},
			description: {
				size: 25,
				weight: 500,
			}
		}

		const data = config[params.type]
		const str = removeAllSymbol(params.content)

		if (params.content && data) {
			return this.getSvgContent({
				content: percentToUtf8Encoding(str),
				...data
			});
		}
	}

	getSvgContent({
		content,
		size,
		weight,
		color = '#61dafb',
		align = 'center',
	}: SvgContentParams): string {
		if (typeof content === 'object') {
			let result = svgStart

			content.forEach(el => {
				if (el === '|space|') {
					result += '<br />';
				} else {
					result += el;
				}
			});

			result += `
			</div>
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
				${svgEnd}
			`;

			return result;
		}

		return `
			${svgStart}${content}
			</div>
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
			${svgEnd}
			`;
	}

	convert(body) {
		if (!body || !body.data) {
			return {
				data: 'invalid body.'
			}
		}

		return {
			data: utf8ToPercentEncoding(body.data)
		}
	}
}
