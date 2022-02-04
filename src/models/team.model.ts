import {Pokemon} from '.';

export interface Team {
  id: number;
  name: string;
  trainerId: number;
  teamName: string;
  pokemons: Pokemon[];
  trainerPicture: string;
}
