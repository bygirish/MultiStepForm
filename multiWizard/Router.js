import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MainScreen from './MainScreen';
import Component1 from './../Component/Component1';
import Start from './Start';

const RouterComp = () => {
  console.log('In RouterComp');

//  console.log = () => {};
  return(
    <Router>
      <Scene key = "Start" initial component = { Start } hideNavBar />
    </Router>
  );
};

export default RouterComp;
