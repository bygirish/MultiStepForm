
// importing required libraries
import React, { Component  } from 'react';
import { Text, View } from 'react-native';

import MultiStepFormSteps from './MultiStepFormSteps';
import MultiStepFormComponents from './MultiStepFormComponents';
import MultiStepFormAction from './MultiStepFormAction';

import defaultStyles from './defaultStyles';

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

    this.finalStyles = {

        header: {
          flexDirection: 'row',
          backgroundColor: this.props.styles.header.backgroundColor ? this.props.styles.header.backgroundColor : defaultStyles.header.backgroundColor,
          height: this.props.styles.header.height ? this.props.styles.header.height : defaultStyles.header.height,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        },

        indicatorStyles: {
          lineColor: this.props.styles.header.lineColor ? this.props.styles.header.lineColor : defaultStyles.indicatorStyles.lineColor,
          lineWidth: this.props.styles.header.lineWidth ? this.props.styles.header.lineWidth :  defaultStyles.indicatorStyles.lineWidth,
          lineHeight: this.props.styles.header.lineHeight ? this.props.styles.header.lineHeight : defaultStyles.indicatorStyles.lineHeight,

          stepActiveTextColor: this.props.styles.header.stepActiveTextColor ? this.props.styles.header.stepActiveTextColor : defaultStyles.indicatorStyles.stepActiveTextColor,
          stepDisabledTextColor: this.props.styles.header.stepDisabledTextColor ? this.props.styles.header.stepDisabledTextColor :  defaultStyles.indicatorStyles.stepDisabledTextColor,

          stepActiveBackgroundColor: this.props.styles.header.stepActiveBackgroundColor ? this.props.styles.header.stepActiveBackgroundColor :  defaultStyles.indicatorStyles.stepActiveBackgroundColor,
          stepDisabledBackgroundColor: this.props.styles.header.stepDisabledBackgroundColor ? this.props.styles.header.stepDisabledBackgroundColor :  defaultStyles.indicatorStyles.stepDisabledBackgroundColor,

          stepHeight: this.props.styles.header.stepHeight ? this.props.styles.header.stepHeight :  defaultStyles.indicatorStyles.stepHeight,
          stepWidth: this.props.styles.header.stepWidth ? this.props.styles.header.stepWidth :  defaultStyles.indicatorStyles.stepWidth,
          stepBorderWidth: this.props.styles.header.stepBorderWidth ? this.props.styles.header.stepBorderWidth :  defaultStyles.indicatorStyles.stepBorderWidth,
          stepBorderColor: this.props.styles.header.stepBorderColor ? this.props.styles.header.stepBorderColor :  defaultStyles.indicatorStyles.stepBorderColor,
          stepRadius: this.props.styles.header.stepRadius ? this.props.styles.header.stepRadius :  defaultStyles.indicatorStyles.stepRadius,
        },

        body: {
          backgroundColor: this.props.styles.body.backgroundColor ? this.props.styles.body.backgroundColor : defaultStyles.body.backgroundColor,
          height: this.props.styles.body.height ? this.props.styles.body.height : defaultStyles.body.height,
          marginTop: 10,
        },

        footer: {

          padding: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor:  this.props.styles.footer.backgroundColor ? this.props.styles.footer.backgroundColor : defaultStyles.footer.backgroundColor,
          height: this.props.styles.footer.height ? this.props.styles.footer.height : defaultStyles.footer.height,
          marginTop: 10,

        },

        buttonStyle: {
          buttonColor: this.props.styles.footer.buttonColor ? this.props.styles.footer.buttonColor : defaultStyles.buttonStyle.buttonColor,
          nextButtonText: this.props.styles.footer.nextButtonText ? this.props.styles.footer.nextButtonText : defaultStyles.buttonStyle.nextButtonText,
          prevButtonText: this.props.styles.footer.prevButtonText ? this.props.styles.footer.prevButtonText : defaultStyles.buttonStyle.prevButtonText,
          textColor: this.props.styles.footer.textColor ? this.props.styles.footer.textColor : defaultStyles.buttonStyle.textColor,
          buttonWidth: this.props.styles.footer.buttonWidth ? this.props.styles.footer.buttonWidth : defaultStyles.buttonStyle.buttonWidth,
          buttonHeight: this.props.styles.footer.buttonHeight ? this.props.styles.footer.buttonHeight : defaultStyles.buttonStyle.buttonHeight,
        }

    }

  }

  render() {

    console.log(FILE_NAME + "In Rendor Method");

    console.log("Current State is - ", this.state);

    return (
        <View>
          <MultiStepFormSteps
            styles = { this.finalStyles.header }
            currentStep = { this.state.currentStep }
            steps = { this.props.steps }
            indicatorStyles = { this.finalStyles.indicatorStyles }
          />

          <MultiStepFormComponents
            styles = { this.finalStyles.body }
            currentStep = { this.state.currentStep }
            steps = { this.props.steps }
            existingMultiStepFormComponentsState = {this.state.multiStepFormComponentsState}
            saveComponentState = {(componentIndex, componentState) => this.updateFormState(componentIndex, componentState)}
          />

          <MultiStepFormAction
            buttonStyle = { this.finalStyles.buttonStyle }
            styles = { this.finalStyles.footer }
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
