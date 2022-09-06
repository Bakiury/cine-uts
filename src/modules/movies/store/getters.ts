import { RootState } from '../../../store/types';
import { GetterTree } from 'vuex';
import { MoviesStateInterface } from './interfaces';

const getters: GetterTree<MoviesStateInterface, RootState> = {

    getPeliculas(state) {

        return state.peliculas;
    },
};

export default getters;