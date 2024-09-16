import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../screens/Login";
import Posts from "../../screens/Posts";
import Register from "../../screens/Register";
import { propsNavigationStack } from "./Models";

const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>();

export default function() {
  return(
    <Navigator initialRouteName="Posts">
      <Screen name="Login" component={Login} />
      <Screen name="Posts" component={Posts} />
      <Screen name="Register" component={Register} />
    </Navigator>
  ) 
}