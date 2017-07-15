import React, { Component } from 'react';
import { Text, TextInput } from 'react-native';
import { Input, InputGroup } from 'native-base';


// constants
const FILE_NAME = "Component2.js : ";
class Component3 extends Component {
  constructor(props) {

    console.log(FILE_NAME + "In constructor");
   super(props);

       console.log("Received props are - ", this.props);

   if(this.props.existingComponentState == null)
      this.state = { text: 'Text 3' };
   else
      this.state = this.props.existingComponentState;
 }

  render(){

    console.log(FILE_NAME + "In Render Method");
    return (
       <TextInput
         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
         editable = {true}
       />
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
    this.props.saveComponentState(this.props.componentIndex, this.state)
  }
}

export default Component3;
