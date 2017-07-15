// importing required libraries
import React, { Component  } from 'react';
import { Text, View } from 'react-native';

import PrevButton from './../Elements/PrevButton';
import NextButton from './../Elements/NextButton';


// importing styles
import styles from './styles';

// constants
const FILE_NAME = "MultiStepFormAction.js : ";

class MultiStepFormAction extends Component {

  constructor(props){
    console.log(FILE_NAME + "In constructor");
    super(props);

    console.log("Received props are - ", this.props);
  }

  render() {

    console.log(FILE_NAME + "In Rendor Method");

    console.log("Current State is - ", this.state);

    return (
        <View style = { styles.formActionStyle }>

      <View>
       { this.showPrevButton() }
       </View>
       <View>
       { this.showNextButton() }
       </View>

        </View>
    );
  }

  showPrevButton = () => {

    console.log(FILE_NAME + "In showPrevButton Method");

    console.log("Current Step is - ", this.props.currentStep);
    if(this.props.currentStep != 0) {

      return (
        <PrevButton onPrevClick = { this.props.onPrevClick } buttonText = 'Previous'  />
      );
    }
  }

  showNextButton = () => {

    console.log(FILE_NAME + "In showNextButton Method");

    console.log("Current Step is - ", this.props.currentStep);

    if(this.props.currentStep != this.props.steps.length - 1 ) {

      return (
        <NextButton onNextClick = { this.props.onNextClick } buttonText = 'Forward'  />
      );
    }
    else {
      return (
        <NextButton onNextClick = { this.props.onNextClick } buttonText = 'Done'  />
      );
    }
  }

}



export default MultiStepFormAction;
