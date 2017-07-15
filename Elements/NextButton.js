import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import ActionButton from './../styles/MultiStepFormAction/ActionButton';


class NextButton extends Component {

  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props);
    return(
      <TouchableOpacity onPress = { this.props.onNextClick }>
      <ActionButton customButtonText = {this.props.buttonText} />
      </TouchableOpacity>
    );
  }
}

export default NextButton;
