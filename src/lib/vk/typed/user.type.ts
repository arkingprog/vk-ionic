
export interface responseUser {
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
    maiden_name?: string
    military

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
    phoro: any; //GOTO change to photo Object
    crop: crop;
    rect: rect;

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
