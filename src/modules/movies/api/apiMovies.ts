import axios from 'axios';

const api = axios.create({
    baseURL: 'https://backend-cineuts.herokuapp.com/api/',
});

export default {

    getPeliculas () {
        return api.get(`peliculas`);
    }

};