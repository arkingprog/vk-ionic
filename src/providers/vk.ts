import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

import {Config} from '../config/config'
import {InAppBrowser} from "ionic-native";

enum Scope{
  notify = 1,
  friends = 2,
  photos = 4,
  audio = 8,
  video = 16,
  pages = 128,
  status = 1024,
  notes = 2048,
  messages = 4096,
  wall = 8192,
  ads = 32768,
  offline = 65536,
  docs = 131072,
  groups = 262144,
  notifications = 524288,
  stats = 1048576,
  market = 1048576,
}
let access='0230c9b1485ba126054040b8e2d1f084cc79ce999bece84ed5cfc4025ee0fee14bae9b147c154e1081750';
@Injectable()
export class VK {
  accessToken:any;
  baseUrl:string;
  private _isAuth:boolean = false;

  constructor(public http:Http) {
    this.baseUrl = 'https://oauth.vk.com/authorize';
    this.accessToken=access;
    this._isAuth=true;
  }

  login() {
    let params = Config.getVKCrefentialsString();
    let url = `${this.baseUrl}?${params}`;
    return new Promise((resolve, reject)=> {
      let browser = new InAppBrowser(url, '_blank');
      let listener = browser.on('loadstop').subscribe((event:any)=> {
        if (event.url.indexOf(Config.getVKCredentials().redirect_uri) > -1) {
          listener.unsubscribe();
          browser.close();
          let token = event.url.split('#')[1].split('&')[0].split('=')[1];
          this.accessToken = token;
          this._isAuth=true;
          resolve(event.url);
        } else {
          this._isAuth=false;
          reject("Could not authenticate");
        }
      });
    });
  }

  get isAuth():boolean {
    return this._isAuth;
  }

  getAccessToken() {
    return this.accessToken;
  }

  /**
   *
   * @param method
   * @param params
   * @returns {Observable<R>}
     */
  request(method:string,params:{}) {

   return this.http.get(`${method}?access_token=${this.accessToken}`)
    // return this.http.get(`/friends.getOnline?v=5.52&access_token=50d900ca88ffd8c2d8a71374a599269cdd59d99929966b18cd2745a8392877e57bd5a19ae7f6eaf391cbf`).map(res=>res.json());
  }

  setAccessToken(token) {
    this.accessToken = token
  }


}
