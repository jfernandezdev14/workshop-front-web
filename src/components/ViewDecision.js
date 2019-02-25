import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";



class ViewDecision extends React.Component{

constructor(props) {
    super(props);
    this.state = {
      response: this.props.applicationResult
    };
  }


render() {
return (
    <div>
      <h1>{this.state.response}</h1>
    </div>
    );
  }

}

export default ViewDecision;