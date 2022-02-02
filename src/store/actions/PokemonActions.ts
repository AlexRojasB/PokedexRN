import {loadPokemons} from './PokemonActionTypes';

export const LoadPokemons = (pag: number, offset: number) => ({
  type: loadPokemons,
  payload: {page: pag, offset},
});
