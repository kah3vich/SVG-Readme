import { Body, Controller, Get, Header, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import type { SvgParams } from './types';

@Controller('readme')
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('/svg')
	@Header('content-type', 'image/svg+xml')
	svg(@Query() params: SvgParams): string | Error {
		return this.appService.svg(params);
	}

	@Post('/convert')
	convert(@Body() body): Record<'data', string> | Error {
		return this.appService.convert(body);
	}
}
