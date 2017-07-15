import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './MultiStepFormStepsStyle';

class Lines extends Component {
  render(){
    return (
      <View style = {{
        height: styles.Line.height,
        width: styles.Line.width,
        backgroundColor: styles.Line.color,
      }} />
    );
  }
}

export default Lines;
