import { responseUser } from './../../lib/vk/typed/user.type';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VK } from "../../providers/vk";
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  users: responseUser[];
  constructor(public navCtrl: NavController, public vk: VK) {
    this.vk.request('users.get', { user_ids: ['66505229', '1'], fields: ['counters'] })
      .subscribe(data => {
        this.users = (data.response);// as responseUser;
        console.log(this.users)
      });
  }
}







