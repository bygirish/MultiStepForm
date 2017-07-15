
// importing required libraries
import React, { Component  } from 'react';
import { Text, View } from 'react-native';

// importing styles
import styles from './styles';
import Lines from './../styles/MultiStepFormSteps/Lines';
import ShapesActive from './../styles/MultiStepFormSteps/ShapesActive';
import ShapesDisabled from './../styles/MultiStepFormSteps/ShapesDisabled';

// constants
const FILE_NAME = "MultiStepFormSteps.js : ";

class MultiStepFormSteps extends Component {

  constructor(props){
    console.log(FILE_NAME + "In constructor");
    super(props);
    console.log("Received props are - ", this.props);
  }



  render() {

    console.log(FILE_NAME + "In Rendor Method");

    console.log("Current State is - ", this.state);


  var multiStepHeader = [];

	for(let i = 0; i < this.props.currentStep; i++){
		multiStepHeader.push(
      <ShapesActive stepText = {this.props.steps[i].stepHeaderText} />
		)
	}

  for(let i = this.props.currentStep; i <= this.props.steps.length - 1; i++){
		multiStepHeader.push(
      <View>
      <ShapesDisabled stepText = {this.props.steps[i].stepHeaderText} />
      </View>
		)
	}

    return (
        <View style = { styles.formStepsStyle }>
          {multiStepHeader}
        </View>
    );
  }

}

export default MultiStepFormSteps;
