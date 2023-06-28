import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../routes/Stack/Models";
import { requestLoginRegister } from '../../services/requests';
import { validateLogin } from '../../middleware';
import { useDispatch } from "react-redux";
import { LoginContainer } from "./style";

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
    <LoginContainer>
      <section>
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
      </section>
      <div className="login-buttons">
        <TouchableOpacity
          onPress={ handleClickLoginBtn }
          disabled={ isDisabled }
        >
          <Text>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
        >
          <Text>Register</Text>
        </TouchableOpacity>
      </div>
      { showPopUp && (
        <p
          data-testid="common_login__element-invalid-email"
          style={ { textAlign: 'center' } }
        >
          Login ou senha inválidos
        </p>)}
    </LoginContainer>
  )
}

export default Login;