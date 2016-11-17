export class Config {
  constructor() {
  }

  static getVKCredentials() {
    return {
      client_id: '5729897',
      display: 'mobile',
      redirect_uri: 'https://oauth.vk.com/blank.html',
      response_type: 'token',
      v: '5.60'
    }
  }

  static getVKCrefentialsString() {
    let obj = this.getVKCredentials();
    let params = '';
    for (let key in obj) {
      if (key) {
        params += `&${key}=${obj[key]}`;
      }
    }
    return params;
  }
}
