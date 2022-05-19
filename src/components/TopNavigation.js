import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DiscoverScreen from '../screens/DiscoverScreen';
import NewsScreen from '../screens/NewsScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

function TopNavigation({index, setIndex}) {
  return (
    <View style={{...styles.container, backgroundColor: '#282c35'}}>
      {index === 0 ? (
        <TouchableOpacity style={styles.left}>
          <Text>
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={22}
              color="#007FFF"
            />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}>
          <SimpleLineIcons name="arrow-left" size={22} color="#007FFF" />
          <Text style={styles.text}>Discover</Text>
        </TouchableOpacity>
      )}

      <Text style={{...styles.center, color: 'white'}}>
        {index ? 'All News' : 'Discover'}
      </Text>

      {index ? (
        <TouchableOpacity style={styles.right}>
          <Text>
            <AntDesign name="reload1" size={24} color="#007FFF" />
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.left}>
          <Text style={styles.text}>All News</Text>
          <SimpleLineIcons name="arrow-right" size={22} color="#007FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
  },
  right: {
    width: 80,
    alignItems: 'flex-end',
  },
  text: {fontSize: 16, color: 'lightgrey'},
  center: {
    borderBottomColor: '#007FFF',
    borderBottomWidth: 5,
    paddingBottom: 6,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: '700',
  },
});
