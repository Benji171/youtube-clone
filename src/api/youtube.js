import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        maxResults: 5,
        key: 'AIzaSyBAeNLRaYVAStwo0GWGV6Fzd_SSnCQD_Dc',
    }
});