import {loadPokemons} from '../actions/PokemonActionTypes';

const INITIAL_STATE = {
  pokemons: [],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case loadPokemons:
      return {...state};
    default:
      return state;
  }
};
