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
        height: this.props.style.stepHeight,
        width: this.props.style.stepWidth,
        backgroundColor: this.props.style.stepActiveBackgroundColor,
        borderRadius: this.props.style.stepRadius,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: this.props.style.stepBorderWidth,
        borderColor: this.props.style.stepBorderColor,
        margin: 10,
      }} >
      <Text style = {{color: this.props.style.stepActiveTextColor }}> {this.props.stepText} </Text>
      </View>
    );
  }
}

export default ShapesActive;
