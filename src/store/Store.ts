import PokemonReducer from './reducers/PokemonReducer';
import {combineReducers, createStore} from 'redux';
import TrainerReducer from './reducers/TrainerReducer';

const reducers = combineReducers({
  pokemons: PokemonReducer,
  trainers: TrainerReducer,
});

export default createStore(reducers);
