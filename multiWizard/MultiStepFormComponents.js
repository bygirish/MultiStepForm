
// importing required libraries
import React, { Component  } from 'react';
import { Text, View, BackAndroid, Alert } from 'react-native';

import CurrentStepComponent from './../Component/CurrentStepComponent';

// importing styles
import styles from './styles';

// constants
const FILE_NAME = "MultiStepFormComponents.js : ";

class MultiStepFormComponents extends Component {

  constructor(props){
    console.log(FILE_NAME + "In constructor");
    super(props);

    console.log("Received props are - ", this.props);
    //          <CurrentStepComponent component = { this.props.steps[this.props.currentStep].component } />

  }

  componentWillUpdate(){
      console.log(FILE_NAME + "In componentWillUpdate Method");

      console.log("Existng Form Component is - ", this._form_component);
      this._form_component = null;
  }


  render() {

    console.log(FILE_NAME + "In Rendor Method");

/*
    this.props.steps[this.props.currentStep].component.props = [
      saveComponentState = (componentIndex, componentState) => this.props.saveComponentState(componentIndex, componentState),
      componentIndex = this.props.currentStep,
      existingComponentState = this.props.existingMultiStepFormComponentsState[this.props.currentStep]
    ];
*/


    return (
        <View style = { styles.formComponentStyle }>
        {
           //<this.props.steps[this.props.currentStep].component />
        }
          {

              React.cloneElement(
                    this.props.steps[this.props.currentStep].component,
                    {
                      ref : (c) => {this._form_component = c},
                      saveComponentState : (componentIndex, componentState) => this.props.saveComponentState(componentIndex, componentState),
                      componentIndex : this.props.currentStep,
                      existingComponentState : this.props.existingMultiStepFormComponentsState[this.props.currentStep]
                    },

              )

          }

        </View>
    );
  }

/*
saveComponentState(componentIndex, componentState){

  this.props.saveComponentState(componentIndex, componentState)
}
*/
/*
  componentWillUnMount(){

      this.props.saveFormStepState(this.state);
  }
*/
}

export default MultiStepFormComponents;
