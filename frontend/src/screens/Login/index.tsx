import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../routes/Stack/Models";

const Login = () => {
  const navigation = useNavigation<propStack>();
  const [loginFields, setLoginFields] = useState({
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setLoginFields({
      ...loginFields,
      [id]: value,
    });
  };

  return (
    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 20 }}>LOGIN</Text>
      <input
        id="email"
        type="text"
        className="loginInputs"
        placeholder="Email"
        value={ loginFields.email }
        data-testid="email-input"
        onChange={ handleChange }
      />
      <input
        id="password"
        type="password"
        className="loginInputs"
        placeholder="Senha"
        value={ loginFields.password }
        data-testid="password-input"
        onChange={ handleChange }
      />
      <TouchableOpacity
        style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
        onPress={() => navigation.navigate("Posts")}
      >
        <Text>Posts</Text>
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

export default Login;