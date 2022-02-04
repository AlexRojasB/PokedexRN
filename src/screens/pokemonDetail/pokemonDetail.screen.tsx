import React from 'react';
import {Image, Text} from 'react-native';
import {connect} from 'react-redux';
import {Move, Type} from '../../models';
import {PokemonDetailProps} from './pokemonDetail.props';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PokemonDetailScreen = (props: PokemonDetailProps) => {
  const {pokemonStore} = props;
  const {selectedPokemon} = pokemonStore;
  return (
    <>
      <Text>{selectedPokemon.name}</Text>
      <Text>{selectedPokemon.id}</Text>
      <Text>{selectedPokemon.type}</Text>
      <Image
        source={{uri: selectedPokemon.sprites.front_default}}
        style={{width: 100, height: 100}}
      />
      <Text>{selectedPokemon.height}</Text>
      <Text>{selectedPokemon.weight}</Text>
      {selectedPokemon.moves.map((move: Move) => {
        return <Text key={move.move.name}>{move.move.name}</Text>;
      })}
      {selectedPokemon.types.map((type: Type) => {
        return <Text key={type.type.name}>{type.type.name}</Text>;
      })}
    </>
  );
};
const mapStateToProps = (state: {pokemons: any}) => {
  return {
    pokemonStore: state.pokemons,
  };
};

export default connect(mapStateToProps)(PokemonDetailScreen);
