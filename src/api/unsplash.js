import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID aiTOLdfK4oc3Dc7hisQrQSNWW39DQJKqozq8RlIEzIM'
    }
})

