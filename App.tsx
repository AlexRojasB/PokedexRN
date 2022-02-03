/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import Store from './src/store/Store';
import PokemonListScreen from './src/screens/pokemonList/pokemonList.screen';

const App: () => Node = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}}>
        <PokemonListScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
