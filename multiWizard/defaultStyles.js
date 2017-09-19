import { Dimensions } from 'react-native';

export default {

    header: {
      flexDirection: 'row',
      backgroundColor: "#ecf0f1",
      height: Dimensions.get('window').height * 0.1,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },

    indicatorStyles: {
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
      height: Dimensions.get('window').height * 0.8,
      marginTop: 10,
    },

    footer: {
      padding: 10,
      flexDirection: 'row',
      backgroundColor: "#6C7A89",
      height: Dimensions.get('window').height * 0.1,
      marginTop: 10,
    },

    buttonStyle: {
      nextButtonText:'Move',
      prevButtonText:'Go Back',
      textColor: 'black',
      buttonColor: '#ECECEC',
      buttonWidth: 80,
      buttonHeight: 40
    }

};
