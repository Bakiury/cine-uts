import { RootState } from '../../../store/types';
import apiMovies from '../api/apiMovies';
import { ActionTree } from 'vuex';
import { MoviesStateInterface } from './interfaces';
import { MoviesMutations } from './mutations';

const actions: ActionTree<MoviesStateInterface, RootState> = {
    async getPeliculas({ commit }) {
        const peliculas = (await apiMovies.getPeliculas()).data;

        commit(`movies/${MoviesMutations.SET_PELICULAS}`, peliculas, { root: true });

        return peliculas;
    },
};

export default actions;