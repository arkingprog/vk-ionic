import { Component,Input } from '@angular/core';
import { User } from './../../lib/vk/typed/user.type';

@Component({
  selector: 'random-users',
  templateUrl: 'random-users.html'
})
export class RandomUsersComponent {

  @Input() randomUsers: User[];


  constructor() {
  }

}

