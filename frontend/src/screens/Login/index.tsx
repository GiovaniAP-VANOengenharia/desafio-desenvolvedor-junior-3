import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../routes/Stack/Models";
// import { requestLogin } from '../../services/requests';
import { validateLogin } from '../../middleware';

const Login = () => {
  const navigation = useNavigation<propStack>();
  const [isDisabled, setIsDisabled] = useState(true);
  const [teste, setTeste] = useState('true');
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

  // const handleClickLoginBtn = async () => {
  //   try {
  //     const login = await requestLogin('/login', loginFields);
  //     if (login.result) {
  //       const { id, name, email, role, token } = login.result;
  //       const toLocalStorage = JSON.stringify({ name, email, role, token });
  //       const userId = JSON.stringify(id);
  //       localStorage.setItem('user', toLocalStorage);
  //       localStorage.setItem('id', userId);
  //       setUserId(id);
  //       if (role === 'customer') history.push('/customer/products');
  //       if (role === 'seller') history.push('/seller/orders');
  //       if (role === 'administrator') history.push('/admin/manage');
  //     }
  //   } catch (error) {
  //     setShowPopUp(true);
  //   }
  // };

  useEffect(() => {
    const loginVerified = validateLogin(loginFields);
    setTeste(`${loginVerified}`)

    setIsDisabled(!loginVerified);
  }, [loginFields]);

  return (
    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 20 }}>LOGIN</Text>
      <Text style={{ fontSize: 20 }}>{teste}</Text>
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
    </View>
  )
}

export default Login;