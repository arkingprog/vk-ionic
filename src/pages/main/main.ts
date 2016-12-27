import {User} from '../../lib/vk/model';
import {Component, ViewChild} from '@angular/core';
import {NavController, Content} from 'ionic-angular';
import {VK} from "../../providers/vk";
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
  @ViewChild(Content) content:Content;
  user:User;

  constructor(public navCtrl:NavController, public vk:VK) {
    this.vk.api('users.get', {
      user_ids: [
        '66505229'
      ],
      fields: [
        'counters',
        'photo_id',
        'crop_photo',
        'city',
        'online',
        'last_seen'
      ]
    }).subscribe(data => {
      this.user = data[0];// as responseUser;
    })
  }

  onPageScroll($event) {
    // console.log($event.scrollTop);
  }

  ngAfterViewInit() {
    this.content.ionScroll.subscribe(this.onPageScroll);
  }
}







