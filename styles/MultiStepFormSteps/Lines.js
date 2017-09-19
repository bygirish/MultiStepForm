import React, { Component } from 'react';
import { View } from 'react-native';

import styles from './MultiStepFormStepsStyle';

class Lines extends Component {

  constructor(props){
    super(props);
  }
  render(){
    return (
      <View style = {{
        height: this.props.style.lineHeight,
        width: this.props.style.lineWidth,
        backgroundColor: this.props.style.lineColor,
      }} />
    );
  }
}

export default Lines;
