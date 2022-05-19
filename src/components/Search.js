import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {NewsContext} from '../API/Context';
import SingleNews from './SingleNews';
import Entypo from 'react-native-vector-icons/Entypo';

const Search = () => {
  const {news, darkTheme} = useContext(NewsContext);

  const [searchResults, setSearchResults] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNews, setCurrentNews] = useState();

  const searchHandler = text => {
    console.log('inside search Handler');
    if (!text) {
      setSearchResults([]);
      return;
    }
    setSearchResults(news.articles.filter(query => query.title.includes(text)));
  };
  const modalHandler = n => {
    console.log('inside modal Handler');
    setModalVisible(true);
    setCurrentNews(n);
  };

  return (
    <View style={{width: '100%', position: 'relative'}}>
      <TextInput
        style={{
          ...styles.search,
          backgroundColor: darkTheme ? 'black' : 'lightgrey',
          color: darkTheme ? 'white' : 'black',
        }}
        placeholder="Search for news"
        onChangeText={text => searchHandler(text)}
        placeholderTextColor={darkTheme ? 'white' : 'grey'}
      />
      <View style={styles.searchResults}>
        {searchResults.slice(0, 10).map(n => (
          <TouchableOpacity
            key={n.title}
            activeOpacity={0.7}
            onPress={() => modalHandler(n)}>
            <Text
              style={{
                ...styles.singleResult,
                backgroundColor: darkTheme ? 'black' : 'white',
                color: darkTheme ? 'white' : 'black',
              }}>
              {n.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{position: 'absolute', right: 0, zIndex: 1, margin: 20}}>
          <Entypo name="circle-with-cross" size={30} color="white" />
        </TouchableOpacity>
        <Text
          style={{
            height: '100%',
            // transform: [{scaleY: -1}]
          }}>
          <SingleNews item={currentNews} />
        </Text>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    margin: 10,
    fontSize: 15,
    // marginHorizontal: 10,
  },
  searchResults: {
    position: 'absolute',
    zIndex: 1,
    top: 64,
  },
  singleResult: {
    borderRadius: 5,
    padding: 10,
    margin: 0.5,
    shadowColor: 'black',
    elevation: 5,
  },
});
export default Search;
