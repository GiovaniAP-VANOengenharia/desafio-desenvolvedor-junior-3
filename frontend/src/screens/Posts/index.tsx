import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propStack } from "../../routes/Stack/Models";
import { useDispatch, useSelector } from "react-redux";
import PostCard from '../../components/PostCard';
import { UserState } from '../../redux/slices/userSlice';
import { requestData, setToken } from "../../services/requests";
import { PostData } from '../../redux/slices/postSlice';
import { invSearch, viewSearch} from './utils';
import { PostContainer } from "./style";

const Posts = () => {
  const navigation = useNavigation<propStack>();
  const [showPopUp, setShowPopUp] = useState(false);
  const [search, setSearch] = useState('');
  const [tofilters, setToFilters] = useState(false);
  const [toCreate, setToCreate] = useState(false);
  const [byId, setById] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [myPosts, setMyPosts] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newPostAct, setNewPostAct] = useState('invisible');
  const dispatch = useDispatch();
  const [classes, setClasses] = useState({
    getId: 'invisible-',
    todos: 'invisible',
    mine: 'invisible',
    filter: 'post-filter',
    newPost: 'post-newpost',
  });
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    email: '',
    token: '',
  });
  
  const dataUser = useSelector((state: UserState) => state.user);
  const postSearch = useSelector((state: UserState) => state.search);

  const updateRedux = (postList: PostData[]) => {
    setPosts(postList);
    dispatch({ type: 'posts/postData', payload: { postList }});
  };

  const getPosts = async (toGet: string) => {
    try {
      const postData = await requestData(`/post/${toGet}`);
      let postList = [];
      if(postData.result) {
        postList = [postData.result];
      } else {
        postList = postData.map((post: PostData) => post.result);
        setAllPosts(postList);
      }
      updateRedux(postList);
    } catch (error) {
      setShowPopUp(true);
    }
  };
  
  const searchPost = (src: string) => {
    const user: string | null = localStorage.getItem('user');
    if(user) setToken(user);
    getPosts(src);
    setUserData(dataUser);
    setSearch('');
  };

  useEffect(() => {
    if(postSearch.search) {
      searchPost(postSearch.search);
      setSearch('');
      dispatch({ type: 'search/postSearch', payload: ''});
    };
  }, []);

  useEffect(() => {
    if(search) {
      searchPost(search);
      setSearch('');
    }
  }, [search]);

  const changeCls = (array: string[], check: boolean) => {
    const changeClasses = check ? { ...viewSearch } : { ...invSearch };
    array.forEach((item) => {
      delete changeClasses[item];
    });
    setClasses({ ...classes, ...changeClasses });
  };

  useEffect(() => {
    changeCls(['newPost'], !toCreate);
    if(toCreate) setNewPostAct('post-newpost-act');
    else setNewPostAct('invisible');
  }, [toCreate]);

  useEffect(() => {
    changeCls(['mine', 'newPost'], !myPosts);
    if(myPosts) {
      setPosts(allPosts
        .filter((post: PostData) => post.userName === userData.name));
    } else {
      setPosts(allPosts);
    }
  }, [myPosts]);

  useEffect(() => {
    changeCls(['filter', 'newPost'], tofilters);
  }, [tofilters]);

  return (
    <PostContainer>
      <div className="posts-header">
        <Text>{ userData.name }</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
        >
          <Text>SAIR</Text>
        </TouchableOpacity>
      </div>
      <div className="search">
        <div className={ `${classes.getId}` }>
          <input
            id="post-id"
            type="number"
            className="searchInputs"
            placeholder="id"
            value={ byId }
            data-testid="post-id-input"
            onChange={(e) => setById(e.target.value)}
          />
          <TouchableOpacity
            onPress={() => setSearch(byId)}
          >
            <Text>Id</Text>
          </TouchableOpacity>
        </div>
        <div className={ `${classes.todos}` }>
          <TouchableOpacity
            onPress={() => setSearch('all')}
          >
            <Text>Todos</Text>
          </TouchableOpacity>
        </div>
        <div className={ `${classes.mine}` }>
          <TouchableOpacity
            onPress={() => setMyPosts(!myPosts)}
          >
            <Text>{ myPosts ? 'Todos' : 'Meus Posts' }</Text>
          </TouchableOpacity>
        </div>
        <div className={ `${classes.filter}` }>
          <TouchableOpacity
            onPress={() => setToFilters(!tofilters)}
          >
            <Text>Filtros</Text>
          </TouchableOpacity>
        </div>
        <div className={ `${classes.newPost}` }>
          <TouchableOpacity
            onPress={() => setToCreate(!toCreate)}
          >
            <Text>Novo Post</Text>
          </TouchableOpacity>
          <div className={ `${newPostAct}` }>
            <PostCard post={ '' } newPost={ true } />
          </div>
        </div>
      </div>
      <div>
        { showPopUp && (
          <p
            data-testid="common_register__element-invalid_register"
          >
            Token inválido!
          </p>)
        }
      </div>
      <div className="posts-wall">
        { posts.map((post: PostData) => (
            <PostCard post={ post } newPost={ false } key={ post.id } />
          ))}
      </div>
    </PostContainer>
  )
}

export default Posts;