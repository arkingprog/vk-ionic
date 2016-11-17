import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VK } from "../../providers/vk";

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {
  constructor(public navCtrl: NavController, public vk: VK) {
    this.vk.request('users.get', { fields: ['photo_id'] }).subscribe(data => console.log(data));
    
  }

}
