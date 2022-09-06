import { MutationTree } from 'vuex';
import { MoviesStateInterface } from './interfaces';

export enum MoviesMutations {
    SET_PELICULAS = 'SET_PELICULAS',
}

const mutation: MutationTree<MoviesStateInterface> = {
    [MoviesMutations.SET_PELICULAS](state, payload) {
        state.peliculas = payload;
    }
};
export default mutation;