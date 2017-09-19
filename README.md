## MultiStepForm

### App demo

<img src = "./demo.gif" />

*-This project contains a multi step form in which any number of forms can be placed.-*

## Getting Started

### Clone the project
`git clone https://github.com/goyalanshu/MultiStepForm.git`

#### Basic Usage

* Install npm modules in your project directory

      $ npm install
  
* For running the app: 

      $ react-native run-android
     
* Defining your own Custom Styles: 

      In custom styles.js file header, body and footer styles can be varied. 
      
* Making different components: 

      In Component folder, different components / forms can be created in separate files and they need to be imported to multiWizard/MainScreen.js
      
 * Custom header text for different components can be set from MainScreen.js only by varying below list: 
 
 ```
 
var multiStepFormSteps = [

  {
    name: 'Form 1',
    component: <Component1 {...this.props} />,
    nextButtonText: 'Next',
    stepHeaderText: '1',
    formState: null
  },

  {
    name: 'Form 2',
    component: <Component2 {...this.props} />,
    nextButtonText: 'Next',
    prevButtonText: 'Go Back',
    stepHeaderText: '2',
    formState: null
  },

  {
    name: 'Form 3',
    component:<Component3 {...this.props} />,
    nextButtonText: 'Next',
    prevButtonText: 'Go Back',
    stepHeaderText: '3',
    formState: null
  },

    {
      name: 'Form 4',
      component:<Component4 {...this.props} />,
      nextButtonText: 'Done',
      prevButtonText: 'Go Back',
      stepHeaderText: '4',
      formState: null
    },

];
```




      
## Contribution

* <a href="https://github.com/GOYALANSHU">@ Anshu Goyal</a> The main Author
* <a href="">@ Girish Kumar Gupta</a> Contributor
* <a href="https://github.com/simerdeep">@ Simerdeep Singh</a> Contributor
