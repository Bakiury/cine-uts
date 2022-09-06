import { createStore } from 'vuex';

// --- store modules
import movies from '../modules/movies/store';

const store = {
    modules: {
        movies
    }
};

export default createStore(store);
