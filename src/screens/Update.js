import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPost, updatePost} from '../Redux/Action/postAction';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Update = ({route, navigation}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();
  const post = useSelector(state => state.post.post);
  const {id} = route.params;
  const loadPost = () => {
    dispatch(getPost(id));
  };

  const update_post = {
    id: id,
    title: title,
    body: body,
  };

  const UpdatePost = () => {
    dispatch(updatePost(update_post));
    navigation.navigate('Data');
  };

  useEffect(() => {
    loadPost();
  }, []);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    }
  }, [post]);

  return (
    <View style={Styles.BackGround}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={Styles.iconBtn}>
        <Ionicons name="ios-arrow-back-circle" color="#e1eef6" size={40} />
      </TouchableOpacity>
      <Text style={Styles.RoundId}>{id}</Text>
      <Text style={Styles.header}>Update Post </Text>
      <View>
        {post?.length !== 0 ? (
          <View>
            <TextInput
              multiline={true}
              value={title}
              style={Styles.InputBox}
              placeholder="Enter Post Title"
              onChangeText={e => setTitle(e)}
              textAlignVertical={'top'}
            />
            <TextInput
              multiline={true}
              value={body}
              style={Styles.InputBox}
              placeholder="Enter Post Title"
              onChangeText={e => setBody(e)}
              textAlignVertical={'top'}
            />
            <TouchableOpacity
              style={Styles.UpdateBtn}
              onPress={() => {
                UpdatePost();
              }}>
              <Text style={Styles.UpdateText}>Update</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <ActivityIndicator
            size="large"
            color="#274c5e"
            style={Styles.Indicator}
          />
        )}
      </View>
    </View>
  );
};

export default Update;

const Styles = StyleSheet.create({
  header: {
    backgroundColor: '#274c5e',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#dae9f4',
    textAlign: 'center',
    paddingVertical: 20,
    position: 'relative',
    zIndex: -1,
  },
  BackGround: {
    backgroundColor: '#dae9f4',
    flex: 1,
  },
  InputBox: {
    marginHorizontal: 15,
    borderColor: '#274c5e',
    borderWidth: 3,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 20,
    fontSize: 20,
    color: '#274c5e',
  },
  UpdateBtn: {
    backgroundColor: '#274c5e',
    borderRadius: 30,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 15,
  },
  UpdateText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e1eef6',
  },
  iconBtn: {
    justifyContent: 'center',
    position: 'absolute',
    left: 20,
    top: 20,
    width: 40,
    height: 40,
  },
  RoundId: {
    backgroundColor: '#e1eef6',
    color: '#274c5e',

    width: 40,
    height: 40,
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 40,
    position: 'absolute',
    right: 20,
    top: 20,
  },
  Indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
