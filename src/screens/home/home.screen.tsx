import * as React from 'react';
import {ScrollView} from 'react-native';
import {PokemonRow} from '../../components/pokemonRow/pokemonRow.component';
import {HomeProps} from './home.props';

export function HomeScreen(props: HomeProps) {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <PokemonRow pokemonId={13} pokemonName="Pikachu" pokemonType="Trueno" />
    </ScrollView>
  );
}
