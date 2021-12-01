/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import RootNavigator from './src/navigation';
import { HEADER } from './src/styles/colors';

const App = () => {

  return (
    <>
      <StatusBar backgroundColor={HEADER} barStyle={'dark-content'} translucent={true} />
      <RootNavigator />
    </>
  );
};

export default App;
