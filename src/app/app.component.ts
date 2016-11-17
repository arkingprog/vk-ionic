import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { LoginPage } from '../pages/login/login';
import { VK, VKInitParams } from "../providers/vk";
import { MainPage } from "../pages/main/main";

@Component({
  templateUrl: `app.html`
})
export class MyApp {
  rootPage;
  constructor(platform: Platform, public vk: VK) {
    let self = this;
    
    let vkInitParam: VKInitParams = {
      client_id: '5729897',
      display: 'mobile',
      redirect_uri: 'https://oauth.vk.com/blank.html',
      response_type: 'token',
      v: '5.60'
    }

    platform.ready().then(() => {

      self.vk.init(vkInitParam);


      if (self.vk.isAuth)
        self.rootPage = MainPage
      else
        self.rootPage = LoginPage;
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

}
