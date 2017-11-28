/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from 'Main'


export default class App extends Component<{}> {
  render() {
    return (
      <Main />
    );
  }

  _renderScene(route,navigator){
    return(<route.component navigator={navigator} {...route}/>)
  }
}


