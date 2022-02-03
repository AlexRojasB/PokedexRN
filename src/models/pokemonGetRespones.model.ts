import {NameUrl} from '.';

export interface PokemonGetResponse {
  count: number;
  next: string;
  previous: null;
  results: NameUrl[];
}
