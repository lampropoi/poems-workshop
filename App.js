import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import List from './pages/List';
import Poem from './pages/Poem';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: List},
    Poem: {screen: Poem}
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'steelblue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const App = createAppContainer(MainNavigator);

export default App;
