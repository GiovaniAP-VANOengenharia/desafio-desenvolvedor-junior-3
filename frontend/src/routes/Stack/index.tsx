import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../screens/Login";
import Posts from "../../screens/Posts";

const { Navigator, Screen } = createNativeStackNavigator();

export default function() {
  return(
    <Navigator initialRouteName="Login">
      <Screen name="Login" component={Login} />
      <Screen name="Posts" component={Posts} />
    </Navigator>
  ) 
}