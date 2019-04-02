/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {YellowBox} from 'react-native';
import Root from "./application";


export default class App extends Component {
  render() {
    YellowBox.ignoreWarnings(['Warning: Async Storage has been extracted from react-native core']); 
    return <Root />
  }
}

