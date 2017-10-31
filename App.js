import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

import DrawerScreen from './screens/DrawerScreen';



export default class App extends React.Component {

  render() {
    return (
       <DrawerScreen/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
