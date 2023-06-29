import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from "react-native";
import {
  requestData,
  requestDeletePost,
  requestUpdatePost,
  setToken,
} from '../../services/requests';
import { PostCardContainer } from "./style";
import calcTime from './date';
import { PostData } from '../../redux/slices/postSlice';
import { useDispatch } from 'react-redux';

function PostCard(props) {
  const { post } = props;
  const [date, setDate] = useState('');
  const [showPopUp, setShowPopUp] = useState(false);
  const [toEdit, setToEdit] = useState(false);
  const [search, setSearch] = useState('all');
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    title: '',
    content: '',
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    setPostData({
      ...postData,
      [id]: value,
    });
  };

  const editDiscart = () => {
    if(toEdit) setToEdit(false);
    else {
      setToEdit(true);
      setPostData({ ...postData, title: post.title, content: post.content});
    }
  };

  const getAllPosts = async (user) => {
    setToken(user);
    const postData = await requestData('/post/all');
    const postList = postData.map((post: PostData) => post.result);
    setPostData(postList);
    dispatch({ type: 'posts/postData', payload: { postList }});
  };
  
  const toSendDelete = async () => {
    setToEdit(false);
    const user = localStorage.getItem('user');
    setToken(user);
    try {
      if(toEdit) {
        await requestUpdatePost(`post/update/${post.id}`, { ...post, ...postData});
      } else {
        await requestDeletePost(`post/delete/${post.id}`);
      }
      await getAllPosts(user);
    } catch (error) {
        console.log('Erro: ', error);
      setShowPopUp(true);
    }
  }

  const dataOfUpdate = () => {
    const dateNow = new Date();
    const updateDate = new Date(post.updated);
    const time = calcTime(dateNow, updateDate);
    return time;
  };

  const dataOfPublising = () => {
    const dateNow = new Date();
    const updateDate = new Date(post.publishe);
    const time = calcTime(dateNow, updateDate);
    return time;
  };

  useEffect(() => {
    setPostData({ ...postData, title: post.title, content: post.content});
    if(post.updated > post.published) {
      const data = dataOfUpdate();
      setDate(`editado a ${data}`);
    } else {
      const data = dataOfPublising();
      setDate(`publicado a ${data}`);
    }
  }, [post]);

 return (
  <PostCardContainer>
    <div className='post-title-content'>
    { toEdit ? (
        <div>
          <input
            id="title"
            type="text"
            className="postInputs"
            placeholder="Titulo"
            value={ postData.title }
            data-testid="email-input"
            onChange={ handleChange }
          />
          <textarea
            id="content"
            className="postInputs"
            placeholder="Texto..."
            value={ postData.content }
            data-testid="email-input"
            onChange={ handleChange }
          />
          </div>
    ): (
      <div>
        <p className='post-title'>{ post.title }</p>
        <p className='post-content'>{ post.content }</p>
      </div>
    )}
    </div>
    <div className='post-footer'>
      <p className='post-date'>{ date }</p>
      <div className='post-buttons'>
        <TouchableOpacity
          onPress={ toEdit ? toSendDelete : editDiscart }
        >
          <Text>{ toEdit ? 'Enviar' : 'Editar' }</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ toEdit ? editDiscart : toSendDelete }
        >
          <Text>{ toEdit ? 'Descartar' : 'Deletar' }</Text>
        </TouchableOpacity>
      </div>
    </div>

    { showPopUp && (
        <p
          data-testid="common_login__element-invalid-email"
          style={ { textAlign: 'center' } }
        >
          Token inválido!
        </p>)}
  </PostCardContainer>
 );
}

export default PostCard;