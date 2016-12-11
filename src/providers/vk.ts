import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { InAppBrowser } from "ionic-native";

let access = '<YOUR-ACCESS-TOKEN>';

// https://api.vk.com/method/users.get?access_token=0230c9b1485ba126054040b8e2d1f084cc79ce999bece84ed5cfc4025ee0fee14bae9b147c154e1081750&fields=photo_id, verified, sex, bdate, city, country, home_town, has_photo, photo_50, photo_100, photo_200_orig, photo_200, photo_400_orig, photo_max, photo_max_orig, online, lists, domain, has_mobile, contacts, site, education, universities, schools, status, last_seen, followers_count, common_count, occupation, nickname, relatives, relation, personal, connections, exports, wall_comments, activities, interests, music, movies, tv, books, games, about, quotes, can_post, can_see_all_posts, can_see_audio, can_write_private_message, can_send_friend_request, is_favorite, is_hidden_from_feed, timezone, screen_name, maiden_name, crop_photo, is_friend, friend_status, career, military, blacklisted, blacklisted_by_me

@Injectable()
export class VK {
  vkInitParam: VKInitParams;
  accessToken: any;
  baseUrl: string = 'https://oauth.vk.com/authorize';
  private _isAuth: boolean = false;
  browser: InAppBrowser;
  initDone: boolean = false;

  constructor(public http: Http) {
    this.accessToken = access;
    this._isAuth = true;
  }

  /**
   * Request to VK api
   * 
   * @param method
   * @param params
   * @returns {Observable<R>}
   */
  api(method: string, params: Object) {
    const appV = this.vkInitParam.v;
    let queryString = '';
    let requestUrl = '';

    for (let key in params)
      queryString += `&${key}=${params[key]}`;
     
    requestUrl = `/${method}?access_token=${this.accessToken}&v=${appV}${queryString}`;
    console.log(requestUrl);
    return this.http.get(requestUrl).map(res => res.json().response);
    // return this.http.get(`/friends.getOnline?v=5.52&access_token=50d900ca88ffd8c2d8a71374a599269cdd59d99929966b18cd2745a8392877e57bd5a19ae7f6eaf391cbf`).map(res=>res.json());
  }

  init(params: VKInitParams): VK {
    this.vkInitParam = params;
    this.initDone = true;
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

//https://oauth.vk.com/authorize?client_id=5729897&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope=notify,friends,photos,audio,video,pages,status,notes,messages,wall,ads,offline,docs,groups,notifications,stats,market&response_type=token&v=5.60

//notify,friends,photos,audio,video,pages,status,notes,messages,wall,ads,offline,docs,groups,notifications,stats,market