import { MoviesStateInterface } from './interfaces';

const state = (): MoviesStateInterface => {
    return {
        peliculas: []
    };
};

export default state;