import { Injectable, Pipe } from '@angular/core';

@Pipe({
  name: 'declensionPipe'
})
@Injectable()
export class DeclensionPipe {

  getNoun(number, wordArray) {
    number = Math.abs(number);
    number %= 100;
    if (number >= 5 && number <= 20) {
      return wordArray[2];
    }
    number %= 10;
    if (number == 1) {
      return wordArray[0];
    }
    if (number >= 2 && number <= 4) {
      return wordArray[1];
    }
    return wordArray[2];
  }

  getAdj(number, one, two) {
    number %= 100;
    if (number == 11) return two;
    number %= 10;
    if (number == 1) return one;
    return two;
  }
  
  transform(value, wordsArray) {
    value += ` ${this.getNoun(value, wordsArray)}`;
    return value;
  }

}

