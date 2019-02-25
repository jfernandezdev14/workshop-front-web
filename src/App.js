import React, { Component } from 'react';
import FormApplicant from './components/forms/FormApplicant'



class App extends React.Component{

constructor(props) {
    super(props);
    this.state = {
    
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  


render() {
return (
    <div>
      <FormApplicant />
      <br/>
      <h1>{this.state.response}</h1>
    </div>
    );
  }

}
export default App;
