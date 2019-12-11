import { combineReducers } from 'redux';
import githubReducers from './github.reducer';
import favoritesReducers from './favorites.reducer';

export default combineReducers({
    favoritesReducers,
    githubReducers
})
