import {Move, Sprites, Type} from '.';

export interface Pokemon {
  id: number;
  name: string;
  sprites?: Sprites;
  height?: number;
  weight?: number;
  type?: Type;
  evolutions?: Pokemon[];
  moves?: Move[];
}
