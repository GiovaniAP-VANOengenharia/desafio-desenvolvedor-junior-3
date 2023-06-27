import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../routes/Stack/Models";
import { requestLoginRegister } from '../../services/requests';
import { validateLogin } from '../../middleware';
import { useDispatch } from "react-redux";

const Login = () => {
  const navigation = useNavigation<propStack>();
  const [isDisabled, setIsDisabled] = useState(true);
  const [showPopUp, setShowPopUp] = useState(false);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
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
      const login = await requestLoginRegister('/user/login', userData);
      if (login.result) {
        setUserData({ ...userData, email: '', password: '' });
        dispatch({ type: 'user/userData', payload: login.result});
        navigation.navigate("Posts");
      }
    } catch (error) {
      setShowPopUp(true);
    }
  };

  useEffect(() => {
    const loginVerified = validateLogin(userData);

    setIsDisabled(!loginVerified);
  }, [userData]);

  return (
    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 20 }}>LOGIN</Text>
      <input
        id="email"
        type="text"
        className="loginInputs"
        placeholder="Email"
        value={ userData.email }
        data-testid="email-input"
        onChange={ handleChange }
      />
      <input
        id="password"
        type="password"
        className="loginInputs"
        placeholder="Senha"
        value={ userData.password }
        data-testid="password-input"
        onChange={ handleChange }
      />
      <TouchableOpacity
        style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
        onPress={ handleClickLoginBtn }
        disabled={ isDisabled }
      >
        <Text>Posts</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text>Register</Text>
      </TouchableOpacity>
      { showPopUp && (
        <p
          data-testid="common_login__element-invalid-email"
          style={ { textAlign: 'center' } }
        >
          Login ou senha inválidos
        </p>)}
    </View>
  )
}

export default Login;