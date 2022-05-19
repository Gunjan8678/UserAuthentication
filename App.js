import {View, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import Context, {NewsContext} from '../API/Context';
import InShortTabs from './src/components/InShortTabs';

const App = () => {
  return (
    <View style={{...styles.screen, backgroundColor: '#282C35'}}>
      <InShortTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    // backgroundColor: '#fff',
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
