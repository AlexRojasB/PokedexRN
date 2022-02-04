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
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './src/screens';
import pokemonDetailScreen from './src/screens/pokemonDetail/pokemonDetail.screen';
import trainerEditScreen from './src/screens/trainerEdit/trainerEdit.screen';
import trainerListScreen from './src/screens/trainerList/trainerList.screen';
import teamListScreen from './src/screens/teamList/teamList.screen';
import teamEditScreen from './src/screens/teamEdit/teamEdit.screen';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen name="Pokedex" component={PokemonListScreen} />
            <Stack.Screen
              name="PokemonDetail"
              component={pokemonDetailScreen}
            /> */}
            {/* <Stack.Screen name="TrainerList" component={trainerListScreen} />
            <Stack.Screen name="Trainer" component={trainerEditScreen} /> */}
                <Stack.Screen name="TeamList" component={teamListScreen} />
            <Stack.Screen name="Team" component={teamEditScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
