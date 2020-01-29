import axios from 'axios';

const KEY = 'AIzaSyBAq5HzfLachU-S4gbdzYTJN4xcvpq0aPE';

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