import React, { Component } from 'react';
import FormApplicant from './components/forms/FormApplicant'



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

  myCallback(callbackInfo) {
    console.log(callbackInfo)
    this.setState({
      response: callbackInfo
    });
  }

  handleOnClick(event) {
    console.log(event)
  }

  handleOnReset(event) {
    console.log(event)
    this.setState({
      response: ""
    });
  }

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
