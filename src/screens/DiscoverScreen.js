import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {NewsContext} from '../API/Context';
import InShortTabs from '../components/InShortTabs';

const DiscoverScreen = () => {
  const {setCategory, setSource, darkTheme} = useContext(NewsContext);
  return (
    <View styles={styles.discover}>
      {/* search */}

      {/* category */}
      <Text style={{...styles.subtitle, color: 'white'}}>Categories</Text>
      <Carousel
        layout={'default'}
        data={categories}
        renderItem={({item, index}) => <TouchableOpacity></TouchableOpacity>}
      />
      {/* sources */}
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
  subtitle: {},
});
