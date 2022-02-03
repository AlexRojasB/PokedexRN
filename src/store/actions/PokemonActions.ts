import {NameUrl, Pokemon} from '../../models';
import {
  loadPokemons,
  loadPokemonsServer,
  updatePokemon,
} from './PokemonActionTypes';

export const LoadPokemonsFromServer = (pokemons: NameUrl[]) => ({
  type: loadPokemonsServer,
  payload: pokemons,
});

export const LoadPokemons = (pokemons: Pokemon[]) => ({
  type: loadPokemons,
  payload: pokemons,
});

export const UpdatePokemon = (pokemon: Pokemon) => ({
  type: updatePokemon,
  payload: pokemon,
});
