import React from 'react'
import axios from 'axios'
import NumberFormat from 'react-number-format'

/**
  FormApplicant class, contains all the fields necessary to complete the form of a loan application
  */
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
      socialSecurityNumber: "",
      name: "",
      email: "",
      ownerAddress: "",
      ownerCity: "",
      ownerState: "",
      ownerPostalCode: "",
      response: "",
      responseError: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }


  /**
  Handles every event of the form and set it automatically to its respective variable of the state
  */
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

/**
  Handles the submitting of the form, doing an axios POST call sending as part of the request the requestedAmount
  */
  handleSubmit(event) {
    // change code below this line
      const req = {
        requestedAmount: Number(this.state.requestedAmount)
       }
            

      axios.post('https://obscure-harbor-53052.herokuapp.com/api/loandecision/', req)
      .then(response => {
      	console.log(response);
      	console.log(response.data);
      	this.setState({
      		response: response.data.decision
    	});
      }).catch(error => {
                console.log(error)               
            })

      
      event.preventDefault()
    }

    /**
	Handler of the event of checking the status of the application, this function sets as a props values the response
	of the financial analasys
  */
    handleOnClick(event) {
    // change code below this line
    this.props.callbackFromParent(this.state.response)

    }

/**
	Form with its inputs for every field needed to fullfil the registration
  */
  render() {
    return (
    <div>
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
        <br />
      <label>
      Owner information:
      </label>
      <br />
        <label>
          Social Security Number:
          <input
            name="socialSecurityNumber"
            type="input"
            value={this.state.socialSecurityNumber}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Name:
          <input
            name="name"
            type="input"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            type="input"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Address:
          <input
            name="ownerAddress"
            type="input"
            value={this.state.ownerAddress}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          City:
          <input
            name="ownerCity"
            type="input"
            value={this.state.ownerCity}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          State:
          <input
            name="ownerState"
            type="input"
            value={this.state.ownerState}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Postal Code:
          <input
            name="ownerPostalCode"
            type="input"
            value={this.state.ownerPostalCode}
            onChange={this.handleInputChange} />
        </label>
        <br/>
        <br/>
        <label>
          Submit application: 
          <button
            name="submit"
            type="submit"
             >Submit</button>
        </label>
      </form>
      <br/>
        <label>
          Check application status: 
          <button
            name="status"
            onClick={this.handleOnClick}
             >Check Status</button>
        </label>
      </div>
    );
  }
}
export default FormApplicant
