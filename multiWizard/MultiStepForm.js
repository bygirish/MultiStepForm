
// importing required libraries
import React, { Component  } from 'react';
import { Text, View } from 'react-native';

import MultiStepFormSteps from './MultiStepFormSteps';
import MultiStepFormComponents from './MultiStepFormComponents';
import MultiStepFormAction from './MultiStepFormAction';


// importing styles
import styles from './styles';

// constants
const FILE_NAME = "MultiStepForm.js : ";


class MultiStepForm extends Component {



  constructor(props){


    console.log(FILE_NAME + "In constructor");
    super(props);

    console.log("Received props are - ", this.props);

    var multiStepFormComponentsState = [];
    this.props.steps.map((data)=>{
        multiStepFormComponentsState.push(data.formState);
    });

    console.log("Initialized states of Form Components are - ", multiStepFormComponentsState);

    this.initialState = {
      currentStep: 0,
      multiStepFormComponentsState: multiStepFormComponentsState,
    };

    this.state =  this.initialState;
  }

  render() {

    console.log(FILE_NAME + "In Rendor Method");

    console.log("Current State is - ", this.state);

    return (
        <View>
          <MultiStepFormSteps
            currentStep = { this.state.currentStep }
            steps = { this.props.steps }
          />

          <MultiStepFormComponents
            currentStep = { this.state.currentStep }
            steps = { this.props.steps }
            existingMultiStepFormComponentsState = {this.state.multiStepFormComponentsState}
            saveComponentState = {(componentIndex, componentState) => this.updateFormState(componentIndex, componentState)}
          />

          <MultiStepFormAction
            onPrevClick = { this.updatePrevStep.bind(this) }
            onNextClick = { this.updateNextStep.bind(this) }
            currentStep = { this.state.currentStep }
            steps = { this.props.steps }
          />
        </View>
    );
  }



updateFormState = (componentIndex, componentState) => {

  console.log(FILE_NAME + "In updateFormState");
  console.log("Current Step is - ", this.state.currentStep);

  console.log("Component Index is - ", componentIndex);
  console.log("Component State is - ", componentState);


  if(this.state.currentStep == this.props.steps.length)
      this.props.onFormSubmit(this.multiStepFormComponentsState);
  else
      this.state.multiStepFormComponentsState[componentIndex] = componentState;

}


updateNextStep = () => {

this.setState({currentStep: this.state.currentStep + 1});

}

updatePrevStep = () => {

this.setState({currentStep: this.state.currentStep - 1});

}

}



export default MultiStepForm;
