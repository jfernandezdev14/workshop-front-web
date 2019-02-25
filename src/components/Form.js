import React, { Component } from 'react';
import FormApplicant from './forms/FormApplicant'
import axios from 'axios'


class App extends React.Component{

constructor(props) {
    super(props);
    this.state = {
      endpoint: 'http://localhost:3001/api/item/',
      request: "",
      response: ""
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

handleSubmit(event) {
    // change code below this line
      const req = {
        requestAmount: FormApplicant.requestAmount,
       }
      
      const resp = ""
     

      axios.post(this.state.endpoint, {
                headers: {
                    'Content-Type': 'application/json'
                },
                req)
      .then((response) => { 
        çresp = response
      }).catch((error) => {
                dispatch({type: ERROR_FINDING_USER})
            })
       

    this.setState({
      request: req,
      response: resp
    });
    }


render() {
return (
    <div>
      <FormApplicant onSubmit={this.handleSubmit}></FormApplicant>
    </div>
    );
  }

}
export default App;
