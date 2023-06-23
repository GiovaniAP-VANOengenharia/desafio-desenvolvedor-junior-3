import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../routes/Stack/Models";

const Register = () => {
  const navigation = useNavigation<propStack>();
  const [registerFields, setRegisterFields] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setRegisterFields({
      ...registerFields,
      [id]: value,
    });
  };

  return (
    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 20 }}>REGISTER</Text>
      <input
        id="name"
        type="text"
        className="RegisterInputs"
        placeholder="Nome"
        value={ registerFields.name }
        data-testid="name-input"
        onChange={ handleChange }
      />
      <input
        id="email"
        type="text"
        className="RegisterInputs"
        placeholder="Email"
        value={ registerFields.email }
        data-testid="email-input"
        onChange={ handleChange }
      />
      <input
        id="password"
        type="password"
        className="RegisterInputs"
        placeholder="Senha"
        value={ registerFields.password }
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
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Register;