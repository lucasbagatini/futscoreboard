/**
 *
 * Button that when is pressed adds 1 to the state score.
 * With a long pressed resets score to 0.
 *
 * @summary Button that handles team score
 * @author Lucas Bagatini
 *
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

// Gets window dimensions
const {height, width} = Dimensions.get('window');

// Component Style
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  button: {
    width: width * 0.35,
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 200,
    color: '#FFFFFF',
  },
});

const ScoreButton = props => {
  // State to count how many times the button was pressed (score/goal)
  const [score, setScore] = useState(0);
  return (
    <View style={styles.container}>
      <TouchableHighlight
        onPress={() => setScore(score + 1)}
        onLongPress={() => setScore(0)}>
        <View style={[styles.button, {backgroundColor: props.color}]}>
          <Text style={styles.text}>{score}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default ScoreButton;
