import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../routes/Stack/Models";
import { useDispatch, useSelector } from "react-redux";
import PostCard from '../../componets/Posts';
import { requestData, setToken } from "../../services/requests";

const Posts = () => {
  const navigation = useNavigation<propStack>();
  const [showPopUp, setShowPopUp] = useState(false);
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    email: '',
    token: '',
  });

  const dataUser = useSelector((state: Object) => state.user);

  const postListData = async () => {
    try {
      setToken(dataUser.token);
      const postData = await requestData('/post/all');
      const postList = postData.map((post: Object) => post.result);
      setPosts(postList);
      // const data = new Date("2011-08-01T19:58:00.003Z");
      const data = new Date();
      console.log(typeof(data));
      dispatch({ type: 'posts/postData', payload: { postList }});
    } catch (error) {
      setShowPopUp(true);
    }
  }

  useEffect(() => {
    setUserData(dataUser);
    postListData();
  }, [dataUser]);

  return (
    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text style={{ fontSize: 20 }}>{ userData.name }</Text>
      <Text style={{ fontSize: 20 }}>{ userData.email }</Text>
      <TouchableOpacity
        style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
        onPress={() => navigation.navigate("Login")}
      >
        <Text>SAIR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
        onPress={() => navigation.navigate("Register")}
      >
        <Text>Register</Text>
      </TouchableOpacity>
      { showPopUp && (
        <p
          data-testid="common_register__element-invalid_register"
          style={ { textAlign: 'center' } }
        >
          Token inválido!
        </p>)}
        { posts.map((post) => (
            <PostCard post={ post } key={ post.id } />
          ))}
    </View>
  )
}

export default Posts;