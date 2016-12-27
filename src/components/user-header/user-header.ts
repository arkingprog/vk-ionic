
import { VK } from './../../providers/vk';
import { User } from '../../lib/vk/model/user.type';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-header',
  templateUrl: 'user-header.html'
})

export class UserHeaderComponent {

  @Input() user: User;

  randomUsers: User[] = [];

  constructor(public vk: VK) {
    this.vk.api('friends.get', { order: 'random', count: 3, fields: ['photo_50'] }).subscribe(data => {
      this.randomUsers = data.items;
    });
  }

}
