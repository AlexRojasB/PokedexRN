import PokemonReducer from './reducers/PokemonReducer';
import {combineReducers, createStore} from 'redux';

const reducers = combineReducers({
  pokemons: PokemonReducer,
});

export default createStore(reducers);
