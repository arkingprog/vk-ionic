import { Photo } from './user.type';

export interface City {
  id: number;
  title: string;
}

export interface Country {
  id: number;
  title: string;
}

export interface LastSeen {
  time: number;
  platform: number;
}

export interface Photo {
  id: number;
  album_id: number;
  owner_id: number;
  photo_75: string;
  photo_130: string;
  photo_604: string;
  photo_807: string;
  photo_1280: string;
  photo_2560: string;
  width: number;
  height: number;
  text: string;
  date: number;
  lat: number;
  long: number;
  post_id: number;
}

export interface Crop {
  x: number;
  y: number;
  x2: number;
  y2: number;
}

export interface Rect {
  x: number;
  y: number;
  x2: number;
  y2: number;
}

export interface CropPhoto {
  photo: Photo;
  crop: Crop;
  rect: Rect;
}

export interface Relative {
  id: number;
  type: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  sex: number;
  nickname: string;
  domain: string;
  screen_name: string;
  bdate: string;
  city: City;
  country: Country;
  timezone: number;
  photo_50: string;
  photo_100: string;
  photo_200: string;
  photo_max: string;
  photo_200_orig: string;
  photo_400_orig: string;
  photo_max_orig: string;
  photo_id: string;
  has_photo: number;
  has_mobile: number;
  is_friend: number;
  friend_status: number;
  online: number;
  wall_comments: number;
  can_post: number;
  can_see_all_posts: number;
  can_see_audio: number;
  can_write_private_message: number;
  can_send_friend_request: number;
  mobile_phone: string;
  home_phone: string;
  skype: string;
  twitter: string;
  site: string;
  status: string;
  last_seen: LastSeen;
  exports: any[];
  crop_photo: CropPhoto;
  verified: number;
  followers_count: number;
  blacklisted: number;
  blacklisted_by_me: number;
  is_favorite: number;
  is_hidden_from_feed: number;
  common_count: number;
  career: any[];
  military: any[];
  university: number;
  university_name: string;
  faculty: number;
  faculty_name: string;
  graduation: number;
  home_town: string;
  relation: number;
  interests: string;
  music: string;
  activities: string;
  movies: string;
  tv: string;
  books: string;
  games: string;
  universities: any[];
  schools: any[];
  about: string;
  relatives: Relative[];
  quotes: string;
}
