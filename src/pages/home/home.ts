import { Component } from '@angular/core';
import {VK} from '../../providers/vk';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public vk:VK) {
    this.vk.request(

    ).subscribe(data=> console.log(data));
  }

}
