import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'words'
})
export class WordsPipe implements PipeTransform {
  transform(value: string, arg: number) {
    if (!value) return value;

    let words = value.split(' ');
    words = words.slice(0, arg);
    return words.join(' ') + '...';
  }
}
