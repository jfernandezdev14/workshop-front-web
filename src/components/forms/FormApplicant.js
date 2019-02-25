import React from 'react'
import axios from 'axios'
import NumberFormat from 'react-number-format'

class FormApplicant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taxId: "",
      businessName: "",
      businessAddress: "",
      city: "",
      state: "",
      postalCode: "",
      requestedAmount: 0,
      response: "",
      responseError: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // change code below this line
      const req = {
        requestedAmount: Number(this.state.requestedAmount)
       }
      
      
      let resp = ""
       let err = ""

      axios.post('https://obscure-harbor-53052.herokuapp.com/api/loandecision/', req)
      .then((response) => { 
        resp = response
        console.log(response)
      }).catch((error) => {
                console.log(error)
                err=error
            })

      this.setState({
      	response: resp,
      	responseError: err
    });
      event.preventDefault();
    }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
      Fill up the following form:
      </label>
      <br />
      <label>
      Business information:
      </label>
      <br />
        <label>
          Tax ID:
          <input
            name="taxId"
            type="input"
            value={this.state.taxId}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Business Name:
          <input
            name="businessName"
            type="input"
            value={this.state.businessName}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Business Address:
          <input
            name="businessAddress"
            type="input"
            value={this.state.businessAddress}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          City:
          <input
            name="city"
            type="input"
            value={this.state.city}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          State:
          <input
            name="state"
            type="input"
            value={this.state.state}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Postal Code:
          <input
            name="postalCode"
            type="input"
            value={this.state.postalCode}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Requested amount:
          <NumberFormat
            name="requestedAmount"
            value={this.state.requestedAmount}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Submit business information: 
          <button
            name="submit"
            type="submit"
             >Submit</button>
        </label>

        <h1>{this.state.response}</h1>
      </form>
    );
  }
}
export default FormApplicant
