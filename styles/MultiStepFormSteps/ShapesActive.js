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
    <View>
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
        marginBottom: 0,
        padding: 5
      }} >
        <Text style = {{color: this.props.style.stepActiveTextColor }}> {this.props.step.stepHeaderText} </Text>
      </View>
      <Text style = {{paddingLeft: 10, paddingRight: 10, alignSelf: 'center'}}>{ this.props.step.name }</Text>
      </View>
    );
  }
}

export default ShapesActive;
