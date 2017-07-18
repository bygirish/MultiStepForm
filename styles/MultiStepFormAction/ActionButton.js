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
          height: this.props.customButtonStyle.buttonHeight,
          width: this.props.customButtonStyle.buttonWidth,
          backgroundColor: this.props.customButtonStyle.buttonColor,
          borderRadius: styles.customButton.radius,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: styles.customButton.borderWidth,
          borderColor: styles.customButton.borderColor,
        }} >

          <Text style = {{color: this.props.customButtonStyle.textColor}}> {this.props.customButtonText} </Text>

        </View>



    );
  }
}

export default ActionButton;
