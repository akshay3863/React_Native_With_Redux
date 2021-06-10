import React, {useState} from 'react';
import shortid from "shortid";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createPost} from '../Redux/Action/postAction';
import {useDispatch} from 'react-redux';
const Edit = ({navigation}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  


  const AddNewPost =()=>{
    const new_post = {
        id: shortid.generate(),
        title: title,
        body: body,
      };
   dispatch(createPost(new_post));
   navigation.navigate('Data');
  }

  return (
    <View style={Styles.BackGround}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={Styles.iconBtn}>
        <Ionicons name="ios-arrow-back-circle" color="#e1eef6" size={40} />
      </TouchableOpacity>
      <Text style={Styles.header}>Add New Post </Text>
      <View>
        <TextInput
          multiline={true}
          style={Styles.InputBox}
          placeholder="Enter Post Title"
          onChangeText={e => setTitle(e)}
          textAlignVertical={'top'}
        />
        <TextInput
          multiline={true}
          style={Styles.InputBox}
          placeholder="Enter Post Body"
          onChangeText={e => setBody(e)}
          textAlignVertical={'top'}
        />
        <TouchableOpacity
          style={Styles.UpdateBtn}
          onPress={() => {
            AddNewPost()
          }}>
          <Text style={Styles.UpdateText}>Add New</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Edit;

const Styles = StyleSheet.create({
  BackGround: {
    backgroundColor: '#dae9f4',
    flex: 1,
  },
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
  iconBtn: {
    justifyContent: 'center',
    position: 'absolute',
    left: 20,
    top: 20,
    width: 40,
    height: 40,
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
});
