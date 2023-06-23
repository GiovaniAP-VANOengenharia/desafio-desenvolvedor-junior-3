import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../routes/Stack/Models";

const Posts = () => {
  const navigation = useNavigation<propStack>();
  const [userData, setUserData] = useState({
    name: 'asdfasdfsdaf',
    email: 'asdfasdfsadf'
  });

  return (
    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 20 }}>{ userData.name }</Text>
      <Text style={{ fontSize: 20 }}>{ userData.email }</Text>
      <TouchableOpacity
        style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Posts;