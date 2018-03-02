import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'temp' })
export class Temp implements PipeTransform {
	transform(value: number): string {
		if (!value) return 'No data';

		let val = value - 273.15;
		return Math.ceil(val) +'\xB0C';

	};
}