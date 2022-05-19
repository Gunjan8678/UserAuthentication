import {View, StyleSheet, StatusBar, Platform} from 'react-native';
import React, {useContext} from 'react';
import Context, {NewsContext} from './src/API/Context';
import InShortTabs from './src/components/InShortTabs';

const App = () => {
  const {darkTheme} = useContext(NewsContext);
  return (
    <View
      style={{
        ...styles.screen,
        backgroundColor: darkTheme ? '#282C35' : 'white',
      }}>
      <InShortTabs />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 50 : StatusBar.currentHeight / 6,
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
