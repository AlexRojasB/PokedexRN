import AsyncStorage from '@react-native-async-storage/async-storage';
import {NameUrl, Pokemon} from '../../models';
import {
  filterPokemons,
  loadPokemons,
  loadPokemonsServer,
  updatePokemon,
} from '../actions/PokemonActionTypes';

interface PokeState {
  pokemons: Pokemon[];
  filteredPokemons: Pokemon[];
}
const INITIAL_STATE: PokeState = {
  pokemons: [],
  filteredPokemons: [],
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case loadPokemonsServer:
      let mappedPokemons: Pokemon[] = action.payload.map(
        (x: NameUrl, index: number) => {
          return {id: index + 1, name: x.name};
        },
      );
      storeData('pokemons', mappedPokemons);
      return {
        ...state,
        pokemons: [...mappedPokemons],
        filteredPokemons: [...mappedPokemons],
      };
    case loadPokemons:
      return {
        ...state,
        pokemons: [...action.payload],
        filteredPokemons: [...action.payload],
      };
    case updatePokemon:
      let pokemons = [...state.pokemons];
      let index = pokemons.findIndex(x => x.id === action.payload.id);
      pokemons[index] = action.payload;
      storeData('pokemons', pokemons);
      return {...state, pokemons: [...pokemons]};
    case filterPokemons:
      let filteredPokemons = state.pokemons.filter(x =>
        x.name.toLowerCase().includes(action.payload.toLowerCase()),
      );
      return {...state, filteredPokemons: [...filteredPokemons]};
    default:
      return state;
  }
};

const storeData = async (key: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(JSON.stringify(e));
  }
};
