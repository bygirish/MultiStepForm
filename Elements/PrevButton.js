import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import ActionButton from './../styles/MultiStepFormAction/ActionButton';



class PrevButton extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return(      
      <TouchableOpacity onPress = { this.props.onPrevClick }>
        <ActionButton customButtonText = {this.props.buttonText} />
      </TouchableOpacity>
    );
  }
}

export default PrevButton;
