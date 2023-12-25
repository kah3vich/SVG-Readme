import { Body, Controller, Get, Header, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { IndexDto } from './dto/index.dto';
import type { TReadmeToSvgParams } from './types';

@Controller('readme')
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('/svg')
	@Header('content-type', 'image/svg+xml')
	getSvg(@Query() params: TReadmeToSvgParams): string | Error {
		return this.appService.getSvg(params);
	}

	@Post('/santa')
	async update(@Body() dto: IndexDto) {
		return await this.appService.santa(dto);
	}
}
