import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './MultiStepFormStepsStyle';
import Lines from './Lines';

class ShapesActive extends Component {

  constructor(props){
    super(props);
  }

  render(){

    var title;
    if(!this.props.header){
      title = <Text style = {{color: this.props.style.stepActiveTextColor }}> {this.props.step.stepHeaderText} </Text> }
    else {
      title = <Text style = {{color: this.props.style.stepActiveTextColor, paddingRight: 4 }}> {this.props.step.name}</Text>  }

    var baseText;

    if(!this.props.header){
      baseText =
      <Text style = {{marginBottom: 10, paddingLeft: 10, paddingRight: 10, alignSelf: 'center'}}>{ this.props.step.name }</Text>
    }
    else {
      baseText =   <Text></Text>;
    }


    return (
    <View >
      <View style = {{
        height: this.props.style.stepHeight,
        width: this.props.style.stepWidth,
        backgroundColor: this.props.style.stepActiveBackgroundColor,
        borderRadius: this.props.style.stepRadius,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: this.props.style.stepBorderWidth,
        borderColor: this.props.style.stepBorderColor,
        margin: 10,
        marginBottom: 0,
        padding: 5,
        }} >

        {title}

      </View>
      {baseText}
    </View>


    );
  }
}

export default ShapesActive;
