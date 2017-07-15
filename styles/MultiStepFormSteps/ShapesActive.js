import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './MultiStepFormStepsStyle';
import Lines from './Lines';

class ShapesActive extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style = {{
        height: styles.Shape.height,
        width: styles.Shape.width,
        backgroundColor: styles.Shape.activeColor,
        borderRadius: styles.Shape.radius,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
      }} >
      <Text style = {{color: styles.Shape.activeTextColor}}> {this.props.stepText} </Text>
      </View>
    );
  }
}

export default ShapesActive;
