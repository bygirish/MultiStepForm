/* MultiStepForm MODULE */

// importing required libraries
import React, { Component  } from 'react';
import { Text, View, Image, TouchableOpacity, Alert, Modal, Dimensions, ScrollView } from 'react-native';
import MultiStepForm from './MultiStepForm';
import Component1 from './../Component/Component1';
import Component2 from './../Component/Component2';
import Component3 from './../Component/Component3';
import Component4 from './../Component/Component4';

import customStyles from './customStyles';

// constants
const FILE_NAME = "MainScreen.js : ";

var multiStepFormSteps = [

  {
    name: 'Basic Details',
    component: <Component1 {...this.props} />,
    nextButtonText: 'Next',
    stepHeaderText: '1',
    formState: null
  },

  {
    name: 'Travel Booking',
    component: <Component2 {...this.props} />,
    nextButtonText: 'Next',
    prevButtonText: 'Go Back',
    stepHeaderText: '2',
    formState: null
  },

  {
    name: 'Stay Details',
    component:<Component3 {...this.props} />,
    nextButtonText: 'Next',
    prevButtonText: 'Go Back',
    stepHeaderText: '3',
    formState: null
  },

    {
      name: 'Local Travel Details',
      component:<Component4 {...this.props} />,
      nextButtonText: 'Done',
      prevButtonText: 'Go Back',
      stepHeaderText: '4',
      formState: null
    },

];

class MainScreen extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style = {{backgroundColor: '#34495e'}}>
        <MultiStepForm
          steps = { multiStepFormSteps }
          onFormSubmit = { (multiStepFormState) => this.onFormDone(multiStepFormState)}
          styles = { customStyles }
        />
      </View>
    );
  }

  onFormDone(multiStepFormState){

      console.log("MultiStep form state is -");

      multiStepFormState.map( (data) => {
          console.log("Form state is -" + data.formState );
      });

  }

}

export default MainScreen;
