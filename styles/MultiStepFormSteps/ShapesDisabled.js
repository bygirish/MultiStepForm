import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './MultiStepFormStepsStyle';
import Lines from './Lines';

class ShapesDisabled extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style = {{ margin: 10, marginTop: 15, }}>

        <View style = {{
          height: this.props.style.stepHeight,
          width: this.props.style.stepWidth,
          backgroundColor: this.props.style.stepDisabledBackgroundColor,
          borderRadius: this.props.style.stepRadius,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: this.props.style.stepBorderWidth,
          borderColor: this.props.style.stepBorderColor,
          padding: 5
        }} >

          <Text style = {{ color: this.props.style.stepDisabledTextColor }}> {this.props.step.stepHeaderText} </Text>

        </View>

        <Lines style = { this.props.style }/>
        <Text style = {{alignSelf: 'center'}}> { this.props.step.name } </Text>

      </View>
    );
  }
}

export default ShapesDisabled;
