import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Login = () => {
  return (
    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 20 }}>LOGIN</Text>
      <TouchableOpacity>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;