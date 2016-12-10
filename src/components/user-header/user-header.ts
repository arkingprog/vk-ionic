
import { VK } from './../../providers/vk';
import { User } from './../../lib/vk/typed/user.type';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'user-header',
  templateUrl: 'user-header.html'
})

export class UserHeaderComponent {
  
  @Input() user: User;
  constructor(public vk: VK) {
  }

}
