import {Pipe, PipeTransform} from '@angular/core';
import {Brew} from './brew.model';

@Pipe({
  name: "fullness",
  pure: false
})


export class FullnessPipe implements PipeTransform {
  transform(input: Brew[], availability: string){
    var output: Brew[] = [];
    if(availability === "available") {
    for (var i = 0; i < input.length; i++) {
      if (input[i].pint > 0) {
        output.push(input[i]);
      }
    }
    return output;
  } else if (availability === "notAvailable") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pint === 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
}
}
