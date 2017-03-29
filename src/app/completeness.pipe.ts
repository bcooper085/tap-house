import {Pipe, PipeTransform} from '@angular/core';
import {Brew} from './brew.model';

@Pipe({

})


export class CompletenessPipe implements PipeTransform {
  transform(input: Brew[]){
    var output: Brew[] = [];
    for (var i = 0; i < input.length; i++) {
      if (input[i].pint > 0) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
