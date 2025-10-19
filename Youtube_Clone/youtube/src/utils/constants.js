
//export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API = 
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="
        +process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_ICON = "https://img.icons8.com/search";


export const OFFSET_LIVE_CHAT = 15;

export const SEARCH_RESULT_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&"
    //"https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key="


        //https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=YOURKEYWORD&type=video&key=YOURAPIKEY
