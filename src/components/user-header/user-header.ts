import { Component } from '@angular/core';

/*
  Generated class for the UserHeader component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'user-header',
  templateUrl: 'user-header.html'
})
export class UserHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello UserHeader Component');
    this.text = 'Hello World';
  }

}
