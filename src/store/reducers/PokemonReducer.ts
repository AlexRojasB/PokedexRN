import {Pokemon} from '../../models';
import {loadPokemons} from '../actions/PokemonActionTypes';

const INITIAL_STATE = {
  pokemons: Array.from(Array(151).keys()).map(x => {
    var unknownPokemon: Pokemon = {
      id: 0,
      name: '',
    };
    unknownPokemon.id = x + 1;
    unknownPokemon.name = 'Unkown';
    return unknownPokemon;
  }),
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case loadPokemons:
      return {...state};
    default:
      return state;
  }
};
