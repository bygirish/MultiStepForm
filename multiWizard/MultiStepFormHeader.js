
// importing required libraries
import React, { Component  } from 'react';
import { Text, View } from 'react-native';
import ShapesActive from './../styles/MultiStepFormSteps/ShapesActive';

// constants
const FILE_NAME = "MultiStepFormSteps.js : ";

class MultiStepFormHeader extends Component {

  constructor(props){
    console.log(FILE_NAME + "In constructor");
    super(props);
    console.log("Received props are - ", this.props);
  }



  render() {

    console.log(FILE_NAME + "In Rendor Method");

    console.log("Current State is - ", this.state);



    return (
        <View style = {this.props.styles}>
        <ShapesActive step = {this.props.steps[this.props.currentStep]} style = { this.props.indicatorStyles } header = {true} />
        </View>
    );
  }

}

export default MultiStepFormHeader;
