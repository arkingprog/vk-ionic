
export interface User {
    id: number;
    first_name: string;
    last_name: string;
    about?: string;
    activities?: string;
    bdate?: string;
    blacklisted?: number;
    blacklisted_by_me?: number;
    books?: string;
    can_post?: number;
    can_see_all_posts?: number;
    can_see_audio?: number;
    can_send_friend_request?: number;
    can_write_private_message?: number;
    career?: career;
    city?: city;
    common_count?: city;
    connections?; //TODO add class
    contacts?: contacts;
    /**
     * Количество различных объектов у пользователя
     * 
     * @type {counters}
     * @memberOf responseUser
     */
    counters?: counters;
    country?: country;
    crop_photo?: crop_photo;
    domain?: string;
    education?: education;
    exports?; //TODO add class
    //TODO add first_name_{case}
    followers_count?: number;
    friend_status?: number;
    games?: string;
    has_mobile?: 0 | 1;
    has_photo?: 0 | 1;
    home_town?: string;
    interests?: string;
    is_favorite?: 0 | 1;
    is_friend?: 0 | 1;
    is_hidden_from_feed?: 0 | 1;
    //TODO add last_name_{case}
    last_seen?: last_seen;
    lists?: string;
    maiden_name?: string;
    photo_id?:string;
    photo_200?:string;
    photo_400_orig?:string;
    photo_max?:string;
    photo_max_orig?:string;
    

}


export interface career {
    group_id?: number;
    /**
     * 
     * 
     * @type {string}
     * @memberOf career
     */
    company?: string;
    country_id?: number;
    city_id?: number;
    city_name?: string;
    /**
     * год начала работы
     *
     * @type {number}
     * @memberOf careerObject
     */
    from?: number;
    /**
     *  год окончания работы
     *
     * @type {number}
     * @memberOf careerObject
     */
    until?: number;
    position?: string;
}

export interface city {
    id: number;
    title: string;
}

export interface contacts {
    mobile_phone?: string;
    home_phone?: string;
}


export interface counters {
    /**
     * количество фотоальбомов
     * 
     * @type {number}
     * @memberOf counters
     */
    albums?: number;
    videos?: number;
    audios?: number;
    photos?: number;
    notes?: number;
    friends?: number;
    groups?: number;
    online_friends?: number;
    mutual_friends?: number;
    user_videos?: number;
    followers?: number;
    pages?: number;
}

export interface country {
    id: number;
    title: string;
}

export interface crop_photo {
    photo?: any; //GOTO change to photo Object
    crop?: crop;
    rect?: rect;

}

export interface crop {
    x: number;
    y: number;
    x2: number;
    y2: number;
}
export interface rect {
    x: number;
    y: number;
    x2: number;
    y2: number;
}

export interface education {
    university: number;
    university_name: string;
    faculty: number;
    faculty_name: string;
    graduation: number;
}

export interface last_seen {
    time: number;
    platform: number;
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// export interface LastSeen {
//     time: number;
//     platform: number;
// }

export interface Photo {
    pid: number;
    aid: number;
    owner_id: number;
    src: string;
    src_big: string;
    src_small: string;
    src_xbig: string;
    src_xxbig: string;
    src_xxxbig: string;
    width: number;
    height: number;
    text: string;
    created: number;
    lat: number;
    long: number;
    post_id: number;
}

// export interface Crop {
//     x: number;
//     y: number;
//     x2: number;
//     y2: number;
// }

// export interface Rect {
//     x: number;
//     y: number;
//     x2: number;
//     y2: number;
// }

// export interface CropPhoto {
//     photo: Photo;
//     crop: Crop;
//     rect: Rect;
// }

// export interface Relative {
//     uid: number;
//     type: string;
// }

// export interface Response {
//     uid?: number;
//     first_name?: string;
//     last_name?: string;
//     sex?: number;
//     nickname?: string;
//     domain?: string;
//     screen_name?: string;
//     bdate?: string;
//     city?: number;
//     country?: number;
//     timezone?: number;
//     photo_50?: string;
//     photo_100?: string;
//     photo_200?: string;
//     photo_max?: string;
//     photo_200_orig?: string;
//     photo_400_orig?: string;
//     photo_max_orig?: string;
//     photo_id?: string;
//     has_photo?: number;
//     has_mobile?: number;
//     is_friend?: number;
//     friend_status?: number;
//     online?: number;
//     wall_comments?: number;
//     can_post?: number;
//     can_see_all_posts?: number;
//     can_see_audio?: number;
//     can_write_private_message?: number;
//     can_send_friend_request?: number;
//     mobile_phone?: string;
//     home_phone?: string;
//     skype?: string;
//     twitter?: string;
//     site?: string;
//     status?: string;
//     last_seen?: LastSeen;
//     exports?: any[];
//     crop_photo?: CropPhoto;
//     verified?: number;
//     followers_count?: number;
//     blacklisted?: number;
//     blacklisted_by_me?: number;
//     is_favorite?: number;
//     is_hidden_from_feed?: number;
//     common_count?: number;
//     career?: any[];
//     military?: any[];
//     university?: number;
//     university_name?: string;
//     faculty?: number;
//     faculty_name?: string;
//     graduation?: number;
//     home_town?: string;
//     relation?: number;
//     personal?: any[];
//     interests?: string;
//     music?: string;
//     activities?: string;
//     movies?: string;
//     tv?: string;
//     books?: string;
//     games?: string;
//     universities?: any[];
//     schools?: any[];
//     about?: string;
//     relatives?: Relative[];
//     quotes?: string;
// }
