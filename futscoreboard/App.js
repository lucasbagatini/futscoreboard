/**
 *
 * @summary App main file
 * @author Lucas Bagatini
 *
 */

import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import ScoreButton from './components/ScoreButton';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const App = () => {
  return (
    <ImageBackground
      source={require('./img/background.jpg')}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.layout}>
        {/* Blue Team Score */}
        <ScoreButton color="#004DCF" />

        {/* Red Team Score */}
        <ScoreButton color="#DB3E00" />
      </View>
    </ImageBackground>
  );
};

export default App;
