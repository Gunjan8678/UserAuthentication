import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const SingleNews = ({item, index}) => {
  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        transform: [{scaleY: -1}],
      }}>
      <Image
        source={{uri: item.urlToImage}}
        style={{
          height: '45%',
          width: windowWidth,
          resizeMode: 'cover',
          marginTop: 60,
        }}
      />
      <View style={{...styles.description, backgroundColor: '#282C35'}}>
        <Text style={{...styles.title, color: 'white'}}>{item.title}</Text>
        <Text style={{...styles.content, color: 'white'}}>
          {item.description}
        </Text>
        <Text style={{color: 'white'}}>
          Short by <Text>{item.author ?? 'unknown'}</Text>
        </Text>
        <ImageBackground
          borderRadius={30}
          style={styles.footer}
          source={{uri: item.urlToImage}}>
          <TouchableOpacity>
            <Text style={{fontSize: 15, color: 'white'}}>
              '{item?.content?.slice(0, 45)}...'
            </Text>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
              Read more
            </Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  description: {
    padding: 15,
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  content: {
    fontSize: 18,
    paddingBottom: 4,
  },
  footer: {
    height: 80,
    width: windowWidth,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#d7be69',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default SingleNews;
