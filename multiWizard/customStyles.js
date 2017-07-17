import { Dimensions } from 'react-native';

export default {

  header: {
    backgroundColor: "#ecf0f1",
    height: Dimensions.get('window').height * 0.1,

    lineColor: 'orange',
    lineWidth: 30,
    lineHeight: 5,

    stepActiveTextColor: 'white',
    stepDisabledTextColor: 'black',

    stepActiveBackgroundColor: '#2C3E50',
    stepDisabledBackgroundColor: '#D2D7D3',

    stepHeight: 30,
    stepWidth: 30,
    stepBorderWidth: 0,
    stepBorderColor: 'white',
    stepRadius: 10,
  },

  body: {
    backgroundColor: "#f0f8ff",
    height: Dimensions.get('window').height * 0.7,
  },

  footer: {
    height: Dimensions.get('window').height * 0.1,
    backgroundColor: "#6C7A89",

    nextButtonText:'Next',
    prevButtonText:'Prev',
    textColor: 'black',
    buttonColor: '#ECECEC',
    buttonWidth: 80,
    buttonHeight: 40
  }

};
