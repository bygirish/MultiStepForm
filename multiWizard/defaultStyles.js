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
