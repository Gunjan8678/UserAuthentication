import {
  useWindowDimensions,
  Animated,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {TabView, SceneMap} from 'react-native-tab-view';
import TopNavigation from './TopNavigation';
import DiscoverScreen from '../screens/DiscoverScreen';
import NewsScreen from '../screens/NewsScreen';
import {NewsContext} from '../API/Context';

export default function InShortTabs() {
  const layout = useWindowDimensions();

  // const [index, setIndex] = useState(1);
  const {index, setIndex} = useContext(NewsContext);
  // console.log('here ', index, setIndex);

  const [routes] = useState([
    {key: 'first', title: 'Discover'},
    {key: 'second', title: 'News'},
  ]);

  const renderScene = SceneMap({
    first: DiscoverScreen,
    second: NewsScreen,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
}
