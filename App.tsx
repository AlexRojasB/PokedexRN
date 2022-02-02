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
import {SafeAreaView} from 'react-native';
import {HomeScreen} from './src/screens';
import {Provider} from 'react-redux';
import Store from './src/store/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}}>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
