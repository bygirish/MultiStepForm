import React, { Component } from 'react';
import { Text, View } from 'react-native';



class CurrentStepComponent extends Component {

  constructor(props){
    super(props);
  }


  render(){
    return(
      <View style = {{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >

        {this.props.component}
        <Text style = {{ fontWeight: 'bold', fontSize: 30 }}>
        </Text>
      </View>
    );
  }
}

export default CurrentStepComponent;
