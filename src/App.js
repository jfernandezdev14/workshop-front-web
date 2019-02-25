import React, { Component } from 'react';
import FormApplicant from './components/forms/FormApplicant'


/**
  Class that contains the logic of a loan application form and the application result.
  */
class App extends React.Component{

constructor(props) {
    super(props);
    this.state = {
      response: ""
    };

    this.myCallback = this.myCallback.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleOnReset = this.handleOnReset.bind(this);
  }

/**
  Handler of the callback of the response of the loan application, it sets the response value for this class 
  in order to set a state of the rendered view
  */
  myCallback(callbackInfo) {
    console.log(callbackInfo)
    this.setState({
      response: callbackInfo
    });
  }

/**
  Handler of the button actions 
  */
  handleOnClick(event) {
    console.log(event)
  }

/**
  Renderer of the application form and the result of the status of the aplication
  */

render() {
return (
    <div >
      {this.state.response === ""? <FormApplicant callbackFromParent={this.myCallback} onClick={this.handleOnClick}/> : null}
      {this.state.response !== ""? <h1>{this.state.response}</h1>: null}
    </div>
    );
  }

}
export default App;
