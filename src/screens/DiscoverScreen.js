import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {NewsContext} from '../API/Context';
import InShortTabs from '../components/InShortTabs';
import {categories, sources} from '../API/api';
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {stackAnimatedStyles} from 'react-native-snap-carousel/src/utils/animations';
import Search from '../components/Search';

const DiscoverScreen = () => {
  const {setCategory, setSource, darkTheme} = useContext(NewsContext);

  const windowWidth = Dimensions.get('window').width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

  return (
    <View styles={styles.discover}>
      {/* search */}
      <Search />

      {/* category */}
      <Text style={{...styles.subtitle, color: darkTheme ? 'white' : 'black'}}>
        Categories
      </Text>
      <Carousel
        layout={'default'}
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.category}
            onPress={() => setCategory(item.name)}>
            <Image source={{uri: item.pic}} style={styles.categoryImage} />
            <Text
              style={{...styles.name, color: darkTheme ? 'white' : 'black'}}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        sliderWidth={windowWidth}
        itemWidth={SLIDE_WIDTH}
        activeSlideAlignment={'start'}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
      />

      {/* sources */}
      <Text style={{...styles.subtitle, color: darkTheme ? 'white' : 'black'}}>
        Sources
      </Text>
      <View style={styles.sources}>
        {sources.map(s => (
          <TouchableOpacity
            onPress={() => setSource(s.id)}
            key={s.id}
            style={styles.sourceContainer}>
            <Image source={{uri: s.pic}} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  discover: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomWidth: 5,
    borderBottomColor: '#007FFF',
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  categoryImage: {
    height: '60%',
    width: '100%',
    resizeMode: 'contain',
  },
  name: {
    fontSize: 14,
    textTransform: 'capitalize',
    marginBottom: 8,
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sources: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 100,
    width: '40%',
    borderRadius: 10,
    backgroundColor: '#cc313d',
    margin: 15,
  },
  sourceImage: {
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
});
