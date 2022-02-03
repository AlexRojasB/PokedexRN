import React from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {pokeApi} from '../../api/reqRes.pokemon';
import {PokemonRow} from '../../components/pokemonRow/pokemonRow.component';
import {LoadPokemons} from '../../store/actions/PokemonActions';
import {PokemonListProps} from './pokemonList.props';

const Item = ({item, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <PokemonRow
      pokemonId={item.id}
      pokemonName={item.name}
      pokemonType={item.type}
    />
  </TouchableOpacity>
);

const DATA = [
  {id: '1', name: 'Pikachu', type: 'Trueno'},
  {id: '2', name: 'Pikachu', type: 'Trueno'},
  {id: '3', name: 'Pikachu', type: 'Trueno'},
  {id: '4', name: 'Pikachu', type: 'Trueno'},
  {id: '5', name: 'Pikachu', type: 'Trueno'},
  {id: '6', name: 'Pikachu', type: 'Trueno'},
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PokemonListScreen = (props: PokemonListProps) => {
  const {pokemonStore} = props;
  const [selectedId, setSelectedId] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    loadPokemons();
    // pokeApi
    //   .get('/v2/pokemon?limit=20&offset=0')
    //   .then(res => {
    //     console.log(res.data);
    //   })
    //   .catch(console.log);
  }, []);

  const loadPokemons = () => {
    dispatch(LoadPokemons());
  };

  const renderItem = ({item}) => {
    return <Item item={item} onPress={() => setSelectedId(item.id)} />;
  };

  return (
    <>
      <TextInput placeholder="Pokemon Name" />
      <View>
        <Text>Normal</Text>
        <Text>Trueno</Text>
        <Text>Fuego</Text>
      </View>
      <FlatList
        data={pokemonStore.pokemons}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
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
