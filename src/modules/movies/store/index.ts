import { Module } from 'vuex';
import state from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { MoviesStateInterface } from './interfaces';
import { RootState } from '../../../store/types';

const Movies: Module<MoviesStateInterface, RootState> = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
};

export default Movies;