
export const GOOGLE_API_KEY = "AIzaSyC-RQ6Zlk9wiZGrzBzoOnDjMv4VzqRGjjA";

//export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_VIDEO_API = 
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="
        +GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_ICON = "https://img.icons8.com/search";

export const LIVE_CHAT_API = 
    "https://www.googleapis.com/youtube/v3/liveChat/messages?liveChatId=Cg0KCzZwX0pNLUk3RlVnKicKGFVDdmpnWHZCbGJRaXlkZmZaVTdtMV9hdxILNnBfSk0tSTdGVWc&part=snippet,authorDetails&maxResults=20&key="
        +GOOGLE_API_KEY;

export const OFFSET_LIVE_CHAT = 15;       