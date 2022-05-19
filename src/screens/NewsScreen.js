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
  let {news} = useContext(NewsContext);

  console.log('news here ', news);

  const [activeIndex, setActiveIndex] = useState();

  const windowHeight = Dimensions.get('window').height;

  // console.log('News articles ', articles);

  return (
    <View style={styles.carousal}>
      <Text> All News </Text>
      {news?.articles ? (
        <Carousel
          firstItem={news.articles.slice(0, 10).length - 1}
          layout={'stack'}
          data={news.articles.slice(0, 10)}
          sliderHeight={300}
          itemHeight={windowHeight}
          vertical={true}
          renderItem={({item, index}) => (
            <SingleNews item={item} index={index} />
          )}
          onSnapToItem={index => setActiveIndex(index)}
        />
      ) : (
        <></>
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
