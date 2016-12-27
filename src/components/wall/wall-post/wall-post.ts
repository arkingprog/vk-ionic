import { Component } from '@angular/core';

@Component({
  selector: 'wall-post',
  templateUrl: 'wall-post.html'
})
export class WallPostComponent {

  text: string;

  constructor() {
    console.log('Hello WallPost Component');
    this.text = 'Hello World';
  }

}
