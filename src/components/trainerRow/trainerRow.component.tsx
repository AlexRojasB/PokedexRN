import React from 'react';
import {Image, Text, View} from 'react-native';
import {TrainerRowProps} from './trainerRow.props';

export function TrainerRow(props: TrainerRowProps) {
  const {trainerImage, traineLocation, trainerName, trainerPhone} = props;
  var icon = trainerImage
    ? {uri: trainerImage}
    : require('../../img/pikachu.png');

  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 5,
        backgroundColor: '#f1ac16',
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
        <Text>{trainerName}</Text>
        <Text>{traineLocation}</Text>
        <Text>{trainerPhone}</Text>
      </View>
      {/* <View style={{flexDirection: 'row'}}>
        {pokemonTypes ? (
          pokemonTypes.map((type: Type) => {
            return <Text key={type.type.name}>{type.type.name}</Text>;
          })
        ) : (
          <Text>No Types</Text>
        )}
      </View> */}
    </View>
  );
}
