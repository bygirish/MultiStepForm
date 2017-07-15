import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainScreen from './MainScreen';
import Component1 from './../Component/Component1';

const RouterComp = () => {
  console.log('In RouterComp');
  return(
    <Router>
      <Scene key = "MainScreen" initial component = { MainScreen } hideNavBar />
      <Scene key = "C1"  component = { Component1 } hideNavBar />

    </Router>
  );
};

export default RouterComp;
