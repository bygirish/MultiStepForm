import React, { Component } from 'react';
import MainScreen from './MainScreen';
import defaultStyles from './defaultStyles';

class Start extends Component {
  render(){
    return(
      <MainScreen styles = { defaultStyles } />
    );
  }
}

export default Start;
