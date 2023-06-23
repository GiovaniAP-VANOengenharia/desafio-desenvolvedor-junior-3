import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { requestLoginRegister } from '../../services/requests';
import { propStack } from "../../routes/Stack/Models";
import { validateRegister } from '../../middleware';

const Register = () => {
  const navigation = useNavigation<propStack>();
  const [isDisabled, setIsDisabled] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  const [teste, setTeste] = useState('true');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setUserData({
      ...userData,
      [id]: value,
    });
  };

  const handleClickLoginBtn = async () => {
    try {
      const login = await requestLoginRegister('/user/register', userData);
      if (login.result) {
        const { id, name, email, token } = login.result;
        setUserData({ ...userData, name: '', email: '', password: '' });
        navigation.navigate("Posts");
      }
    } catch (error) {
      setShowPopUp(true);
    }
  };

  useEffect(() => {
    const loginVerified = validateRegister(userData);
    setTeste(`${loginVerified}`)

    setIsDisabled(!loginVerified);
  }, [userData]);

  return (
    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 20 }}>REGISTER</Text>
      <input
        id="name"
        type="text"
        className="RegisterInputs"
        placeholder="Nome"
        value={ userData.name }
        data-testid="name-input"
        onChange={ handleChange }
      />
      <input
        id="email"
        type="text"
        className="RegisterInputs"
        placeholder="Email"
        value={ userData.email }
        data-testid="email-input"
        onChange={ handleChange }
      />
      <input
        id="password"
        type="password"
        className="RegisterInputs"
        placeholder="Senha"
        value={ userData.password }
        data-testid="password-input"
        onChange={ handleChange }
      />
      <TouchableOpacity
        style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
        onPress={ handleClickLoginBtn }
      >
        <Text>Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      { showPopUp && (
        <p
          data-testid="common_register__element-invalid_register"
          style={ { textAlign: 'center' } }
        >
          Email já utilizado
        </p>)}
    </View>
  )
}

export default Register;