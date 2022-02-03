import React from 'react';
import {Image, Text, View} from 'react-native';
import {Type} from '../../models';
import {PokemonRowProps} from './pokemonRow.props';

export function PokemonRow(props: PokemonRowProps) {
  const {pokemonName, pokemonId, pokemonType, pokemonImage, pokemonTypes} =
    props;
  var icon = pokemonImage
    ? {uri: pokemonImage}
    : require('../../img/pikachu.png');

  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#f0ff16',
        margin: 10,
        borderRadius: 10,
      }}>
      <Image source={icon} style={{width: 100, height: 100}} />
      <View
        style={{
          flexDirection: 'column',
          padding: 10,
          paddingLeft: 16,
          borderRadius: 16,
          marginEnd: 20,
        }}>
        <Text>#{pokemonId}</Text>
        <Text>{pokemonName}</Text>
        <Text>{pokemonType}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        {pokemonTypes ? (
          pokemonTypes.map((type: Type) => {
            return <Text key={type.type.name}>{type.type.name}</Text>;
          })
        ) : (
          <Text>No Types</Text>
        )}
      </View>
    </View>
  );
}
