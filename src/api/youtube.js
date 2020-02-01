import axios from 'axios';

const KEY = 'AIzaSyCsXKR1W-ir2fgCYyM-eg23oq_FDRnPH70';

export default axios.create({
    //setup for this found here https://developers.google.com/youtube/v3/docs/search/list
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});