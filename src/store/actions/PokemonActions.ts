import {NameUrl, Pokemon} from '../../models';
import {
  filterPokemons,
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

export const FilterPokemons = (term: string) => ({
  type: filterPokemons,
  payload: term,
});
