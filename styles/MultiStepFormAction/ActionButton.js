import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './MultiStepFormActionStyle';

class ActionButton extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (


        <View style = {{
          height: styles.customButton.height,
          width: styles.customButton.width,
          backgroundColor: styles.customButton.color,
          borderRadius: styles.customButton.radius,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: styles.customButton.borderWidth,
          borderColor: styles.customButton.borderColor,
        }} >

          <Text style = {{color: styles.customButton.buttonTextColor}}> {this.props.customButtonText} </Text>

        </View>



    );
  }
}

export default ActionButton;
