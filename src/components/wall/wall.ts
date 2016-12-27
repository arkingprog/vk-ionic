import { Component } from '@angular/core';

/*
  Generated class for the Wall component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'wall',
  templateUrl: 'wall.html'
})
export class WallComponent {

  text: string;

  constructor() {
    console.log('Hello Wall Component');
    this.text = 'Hello World';
  }

}
