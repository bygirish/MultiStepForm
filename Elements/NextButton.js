import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import ActionButton from './../styles/MultiStepFormAction/ActionButton';


class NextButton extends Component {

  constructor(props){
    super(props);
  }

  render(){
    console.log("nextbutton",this.props);
    return(
      <TouchableOpacity onPress = { this.props.onNextClick }>
      <ActionButton customButtonText = {this.props.style.nextButtonText} customButtonStyle = {this.props.style} />
      </TouchableOpacity>
    );
  }
}

export default NextButton;
