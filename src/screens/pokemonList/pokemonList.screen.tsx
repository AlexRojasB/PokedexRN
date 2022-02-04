import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {pokeApi} from '../../api/reqRes.pokemon';
import {PokemonRow} from '../../components/pokemonRow/pokemonRow.component';
import {
  FilterPokemons,
  LoadPokemons,
  LoadPokemonsFromServer,
  UpdatePokemon,
} from '../../store/actions/PokemonActions';
import {PokemonListProps} from './pokemonList.props';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Pokemon, PokemonGetResponse} from '../../models';

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <PokemonRow
      pokemonId={item.id}
      pokemonName={item.name}
      pokemonType={item.type}
      pokemonImage={item?.sprites?.front_default}
      pokemonTypes={item?.types}
    />
  </TouchableOpacity>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PokemonListScreen = (props: PokemonListProps) => {
  const {pokemonStore} = props;
  const dispatch = useDispatch();
  const [text, onChangeText] = React.useState('');

  React.useEffect(() => {
    dispatch(FilterPokemons(text));
  }, [text]);

  React.useEffect(() => {
    loadPokemonList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadPokemonList = async () => {
    const pokes = await AsyncStorage.getItem('pokemons');
    if (pokes) {
      const pokesObj: Pokemon[] = JSON.parse(pokes);
      dispatch(LoadPokemons(pokesObj));
    } else {
      const {
        data: {results},
      } = await pokeApi.get<PokemonGetResponse>('/v2/pokemon?limit=151');
      dispatch(LoadPokemonsFromServer(results));
    }
  };

  const getPokemonDetail = async (pokemonId: number) => {
    const pokemonDetail = await pokeApi.get<Pokemon>(`v2/pokemon/${pokemonId}`);
    console.log(pokemonDetail.data);
    dispatch(UpdatePokemon(pokemonDetail.data));
  };

  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => getPokemonDetail(item.id)} />;
  };

  return (
    <>
      <TextInput
        placeholder="Pokemon Name"
        onChangeText={onChangeText}
        value={text}
      />
      <View>
        <Text>Normal</Text>
        <Text>Trueno</Text>
        <Text>Fuego</Text>
      </View>
      <FlatList
        data={pokemonStore.filteredPokemons}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  );
};
const mapStateToProps = (state: {pokemons: any}) => {
  return {
    pokemonStore: state.pokemons,
  };
};

export default connect(mapStateToProps)(PokemonListScreen);
