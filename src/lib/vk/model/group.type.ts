
import {City} from './';
export interface Group {
  gid:number;
  name:string;
  screen_name:string;
  is_closed:number;
  deactivated:string;
  type:string;
  is_admin:number;
  admin_level:number;
  is_member:number;
  invited_by:number;
  has_photo:number;
  photo_50:string;
  photo_100:string;
  photo_200:string;
  is_messages_allowed:number;
  ban_info:BanInfo;
  member_status:number;
  city:City;
}


export interface BanInfo {
  end_date?:number;
  comment?:string;
}

