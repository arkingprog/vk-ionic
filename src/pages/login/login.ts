import {Component} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
import {VK} from '../../providers/vk';
import {HomePage} from "../home/home";

// import {HomePage} from '../../pages/home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(public navCtrl:NavController, private  platform:Platform,public  vk:VK) {
    if(this.vk.isAuth) this.navCtrl.push(HomePage);
  }

  public login() {
    this.navCtrl.push(HomePage);
    // this.vk.login().then((success)=>{
    //   this.navCtrl.push(HomePage);
    // },(error)=>{
    // });
  }
}
