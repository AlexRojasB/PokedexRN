import * as React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {PokemonRow} from '../../components/pokemonRow/pokemonRow.component';
import {PokemonListProps} from './pokemonList.props';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function PokemonListScreen(props: PokemonListProps) {
  return (
    <ScrollView contentContainerStyle={{flex: 1}} scrollEnabled>
      <TextInput placeholder="Pokemon Name" />
      <View>
        <Text>Normal</Text>
        <Text>Trueno</Text>
        <Text>Fuego</Text>
      </View>
      <PokemonRow pokemonId={13} pokemonName="Pikachu" pokemonType="Trueno" />
      <PokemonRow pokemonId={13} pokemonName="Pikachu" pokemonType="Trueno" />
      <PokemonRow pokemonId={13} pokemonName="Pikachu" pokemonType="Trueno" />
      <PokemonRow pokemonId={13} pokemonName="Pikachu" pokemonType="Trueno" />
    </ScrollView>
  );
}
