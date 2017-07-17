import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import { Input, InputGroup } from 'native-base';
import Lines from './../styles/MultiStepFormSteps/Lines';
import ShapesActive from './../styles/MultiStepFormSteps/ShapesActive';

// constants
const FILE_NAME = "Component1.js : ";
class Component1 extends Component {

  constructor(props) {

  console.log(FILE_NAME + "In constructor");
   super(props);
  console.log("Received props are - ", this.props);

    this.state = { text: '' };

   if(this.props.existingComponentState == null)
      this.state = { text: '' };
   else
      this.state = this.props.existingComponentState;

 }

  render(){

    console.log(FILE_NAME + "In Render Method");
    return (
      <View>
       <TextInput
         style={{height: 40, marginTop: 10}}
         placeholder = 'Text 1'
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         editable = {true}
       />


      </View>
     );
  }

  componentDidUpdate(){
    console.log(FILE_NAME + "In   componentDidUpdate Method");

    console.log("Component Index is - ", this.props.componentIndex);
    console.log("Component State is - ", this.state);
    this.props.saveComponentState(this.props.componentIndex, this.state);

  }

  componentWillUnMount(){

    console.log(FILE_NAME + "In   componentWillUnMount Method");

    console.log("Component Index is - ", this.props.componentIndex);
    console.log("Component State is - ", this.state);
    this.props.saveComponentState(this.props.componentIndex, this.state);
  }
}

export default Component1;
