import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NewsContext} from '../API/Context';
import Carousel from 'react-native-snap-carousel';
import SingleNews from '../components/SingleNews';

const NewsScreen = () => {
  let {news, darkTheme} = useContext(NewsContext);

  // console.log('news here ', news);

  const [activeIndex, setActiveIndex] = useState();

  const windowHeight = Dimensions.get('window').height;

  // console.log('News articles ', articles);

  return (
    <View style={styles.carousal}>
      {news?.articles ? (
        <Carousel
          firstItem={news.articles.slice(0, 10).length - 1}
          layout={'stack'}
          data={news.articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({item, index}) => (
            <SingleNews item={item} index={index} darkTheme={darkTheme} />
          )}
          onSnapToItem={index => setActiveIndex(index)}
        />
      ) : (
        <>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: darkTheme ? '#282C35' : 'white',
            }}>
            <Text style={{fontSize: 12, color: darkTheme ? 'white' : 'black'}}>
              There is no article here
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carousal: {
    flex: 1,
    transform: [{scaleY: -1}],
    backgroundColor: 'black',
  },
});

export default NewsScreen;
