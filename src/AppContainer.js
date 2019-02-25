import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import FormApplicant from './components/forms/FormApplicant'
import ViewDecision from './components/ViewDecision'

const AppNavigator = createStackNavigator(
  {
    Home: FormApplicant,
    Details: ViewDecision
  });


class AppContainer extends React.Component{

render() {
return (
    <div>
      <FormApplicant />
    </div>
    );
  }

}

export default createAppContainer(AppNavigator);