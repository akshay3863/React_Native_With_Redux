import React, {useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getPosts, deletePost} from '../Redux/Action/postAction';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Data = ({navigation}) => {
  const supportedURL = 'https://github.com/akshay3863';

  const UrlOpen = () => {
    Linking.openURL(supportedURL);
  };

  const dispatch = useDispatch();
  const posts = useSelector(state => state.post.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const DeletePost = id => {
    dispatch(deletePost(id));
  };

  return (
    <View style={Styles.BackGround}>
      <Text style={Styles.header}>CRUD WITH REDUX</Text>
      <TouchableOpacity
        onPress={() => {
          UrlOpen();
        }}>
        <Text style={Styles.Subheader}>By Akshay3863</Text>
      </TouchableOpacity>
      {posts?.length > 0 ? (
        <ScrollView style={{marginVertical: 20}}>
          {posts.map((item, index) => {
            var str = item?.title;
            var res = str.slice(0, 30);

            return (
              <View key={index} style={Styles.CardContainer}>
                <Image
                  style={Styles.Img}
                  source={{
                    uri: `https://source.unsplash.com/collection/${item?.id}/1600x900`,
                  }}
                />
                <Text style={Styles.Title}>{res}</Text>

                <Text style={Styles.RoundId}>{item?.id}</Text>

                <Text style={Styles.Paragraph}>{item?.body}</Text>
                <View style={Styles.Icon}>
                  <TouchableOpacity
                    style={Styles.IconBtnContainer}
                    onPress={() => {
                      DeletePost(item?.id);
                    }}>
                    <MaterialCommunityIcons
                      name="delete-forever"
                      color="#000"
                      size={30}
                      style={Styles.iconBtn}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={Styles.IconBtnContainer}
                    onPress={() => {
                      navigation.navigate('Update', {
                        id: item?.id,
                      });
                    }}>
                    <Foundation
                      name="page-edit"
                      color="#000"
                      size={30}
                      style={Styles.iconBtn}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      ) : (
        <ActivityIndicator
          size="large"
          color="#274c5e"
          style={Styles.Indicator}
        />
      )}
      <TouchableOpacity
        style={Styles.AddBtnContainer}
         onPress={() => {
          navigation.navigate("AddNew")
        }}>
        <Ionicons
          name="add-circle"
          color="#e1eef6"
          size={60}
          style={Styles.iconBtn}
        />
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  header: {
    backgroundColor: '#274c5e',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#dae9f4',
    textAlign: 'center',
    paddingVertical: 10,
  },
  Subheader: {
    color: '#dae9f4',
    fontSize: 20,
    backgroundColor: '#274c5e',
    textAlign: 'center',
    paddingBottom: 10,
  },
  BackGround: {
    backgroundColor: '#dae9f4',
    flex: 1,
  },
  CardContainer: {
    backgroundColor: '#77919d',
    paddingVertical: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  Img: {
    width: '100%',
    height: 130,
    borderRadius: 8,
    marginBottom: 5,
  },
  Title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
    fontWeight: '900',
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  Paragraph: {
    color: '#dae9f4',
    fontSize: 16,
  },
  Indicator: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Icon: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  iconBtn: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    
  },
  IconBtnContainer: {
    backgroundColor: '#e1eef6',
    height: 50,
    width: 50,
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 30,
  },
  RoundId: {
    backgroundColor: '#e1eef6',
    color: '#274c5e',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 45,
    height: 45,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 40,
    position: 'absolute',
    left: 20,
    top: 20,
  },
  AddBtnContainer:{
    
    position: 'absolute',
     bottom:20,
    right:20
  }
});

export default Data;
