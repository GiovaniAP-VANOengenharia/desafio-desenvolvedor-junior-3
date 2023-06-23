import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation<propStack>();
  return (
    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 20 }}>REGISTER</Text>
      <TouchableOpacity
        style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
        onPress={() => navigation.navigate("Posts")}
      >
        <Text>Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login;