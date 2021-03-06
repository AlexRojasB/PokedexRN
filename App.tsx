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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarShowLabel: false,
              tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#fff',
                borderRadius: 15,
                height: 90,
              },
            }}>
            <Tab.Screen
              name="Pokedex"
              component={Pokemon}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="Trainers"
              component={Trainer}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="Teams"
              component={Team}
              options={{headerShown: false}}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

function Pokemon() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokemon" component={PokemonListScreen} />
      <Stack.Screen
        name="PokemonDetail"
        component={pokemonDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function Trainer() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrainerList"
        component={trainerListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Trainer" component={trainerEditScreen} />
    </Stack.Navigator>
  );
}

function Team() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TeamList" component={teamListScreen} />
      <Stack.Screen
        name="Team"
        component={teamEditScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default App;
