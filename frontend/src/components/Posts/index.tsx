import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";

function PostCard(props) {
  const { post } = props;

 return (
  <View>
    <Text style={{ fontSize: 20 }}>{ post.title }</Text>
    <Text style={{ fontSize: 20 }}>{ post.content }</Text>
    <TouchableOpacity
        style={{ marginTop: 12, padding: 8, backgroundColor: "#BDBDBD" }}
        // onPress={() => navigation.navigate("Register")}
      >
        <Text>Editar</Text>
      </TouchableOpacity>
  </View>
 );
}

export default PostCard;