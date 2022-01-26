import React from 'react';
import {Image, Text, View} from 'react-native';
import {PokemonRowProps} from './pokemonRow.props';

export function PokemonRow(props: PokemonRowProps) {
  const {pokemonName, pokemonId, pokemonType} = props;
  return (
    <View style={{flexDirection: 'column', padding: 10}}>
      <Image
        source={require('../../img/pikachu.png')}
        style={{width: 100, height: 100}}
      />
      <View
        style={{
          flexDirection: 'column',
          padding: 10,
          paddingLeft: 16,
          backgroundColor: '#f0ff16',
          borderRadius: 16,
          marginEnd: 20,
        }}>
        <Text>#{pokemonId}</Text>
        <Text>{pokemonName}</Text>
        <Text>{pokemonType}</Text>
      </View>
    </View>
  );
}
