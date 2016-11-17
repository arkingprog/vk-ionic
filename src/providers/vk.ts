import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { InAppBrowser } from "ionic-native";

import { vkUserMethod } from '../lib/types/vkMethod.type'


let access = '0230c9b1485ba126054040b8e2d1f084cc79ce999bece84ed5cfc4025ee0fee14bae9b147c154e1081750';

@Injectable()
export class VK {
  vkInitParam: VKInitParams;
  accessToken: any;
  baseUrl: string;
  private _isAuth: boolean = false;
  browser: InAppBrowser;
  initDone: boolean = false;

  constructor(public http: Http) {
    this.baseUrl = 'https://oauth.vk.com/authorize';
    this.accessToken = access;
    this._isAuth = true;
  }


  init(params: VKInitParams): VK {
    this.vkInitParam = params;
    this.initDone = true;
    console.log(this.VKCredentialsString());
    return this;
  }

  login() {
    return new Promise((resolve, reject) => {
      if (!this.initDone) reject("Need initial setting VK");
      let params = this.VKCredentialsString();
      let url = `${this.baseUrl}?${params}`;
      this.browser = new InAppBrowser(url, '_blank');
      let listener = this.browser.on('loadstop').subscribe((event: any) => {
        if (event.url.indexOf(this.vkInitParam.redirect_uri) > -1) {
          listener.unsubscribe();
          this.browser.close();
          let token = event.url.split('#')[1].split('&')[0].split('=')[1];
          this.accessToken = token;
          this._isAuth = true;
          resolve(event.url);
        } else {
          this._isAuth = false;
          reject("Could not authenticate");
        }
      });
    });
  }

  logout() {
    this.browser = new InAppBrowser('', '', 'clearsessioncache=yes,clearcache=yes')
  }
  get isAuth(): boolean {
    return this._isAuth;
  }

  /**
   * Request to VK api
   * 
   * @param method
   * @param params
   * @returns {Observable<R>}
   */
  request(method: string, params: Object) {
    const appV = this.vkInitParam.v;
    let queryString = '';
    for (let key in params) {
      if (key) {
        queryString += `&${key}=${params[key]}`;
      }
    }
    let requestUrl = `/${method}?access_token=${this.accessToken}&v=${appV}${queryString}`
    return this.http.get(requestUrl).map(res => res.json());
    // return this.http.get(`/friends.getOnline?v=5.52&access_token=50d900ca88ffd8c2d8a71374a599269cdd59d99929966b18cd2745a8392877e57bd5a19ae7f6eaf391cbf`).map(res=>res.json());
  }

  users(subMethod: vkUserMethod) {
    console.log(subMethod)
  }

  private VKCredentialsString() {
    let params = '';
    for (let key in this.vkInitParam) {
      if (key === "scope") {
        let scope = this.vkInitParam[key].reduce(function (sum, current) {
          return sum + current;
        }, 0);
        params += `&scope=${scope}`;
        break;
      }
      else
        params += `&${key}=${this.vkInitParam[key]}`;
    }
    return params;
  }
}

export interface VKInitParams {
  // client_id= '5729897'
  // display= 'mobile'
  // redirect_uri= 'https://oauth.vk.com/blank.html'
  // response_type= 'token'
  // v= '5.60'
  client_id: string;
  display: string;
  redirect_uri: string;
  response_type: string;
  v: string;
  scope: VKScope[];
}

export enum VKScope {
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
