import { IsString } from 'class-validator';

export class IndexDto {
	@IsString()
	type: string;

	@IsString()
	value: string;
}
