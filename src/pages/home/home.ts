import { Component } from '@angular/core';
import { VK } from '../../providers/vk';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController, public vk: VK) {
    // this.vk.request('users.get',{appid:'das',user_ids:['1']}).subscribe(data=>console.log(data))
    this.vk.request('users.get', { appid: 23 }).subscribe(data => console.log(data))
    // this.vk.request( ).subscribe(data=> console.log(data));
  }
}

