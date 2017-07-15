import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './MultiStepFormStepsStyle';
import Lines from './Lines';

class ShapesDisabled extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style = {{ margin: 10}}>

        <View style = {{
          height: styles.Shape.height,
          width: styles.Shape.width,
          backgroundColor: styles.Shape.disabledColor,
          borderRadius: styles.Shape.radius,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: styles.Shape.borderWidth,
          borderColor: styles.Shape.borderColor,
        }} >

          <Text style = {{color: styles.Shape.disabledTextColor}}> {this.props.stepText} </Text>

        </View>

        <Lines />

      </View>
    );
  }
}

export default ShapesDisabled;
