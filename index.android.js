/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import Router from './multiWizard/Router';
import MainScreen from './multiWizard/MainScreen';

export default class createForm extends Component {

  render() {
    return (
    <Router />
    );
  }
}

AppRegistry.registerComponent('multiStep', () => createForm);
