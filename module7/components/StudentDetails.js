import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TestScreen = (props) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>{props.name}</Text>
      <Text style={styles.text}>{props.description}</Text>
    </View>,
    <view>
        <image source={require('../assets/1.jpg')} style={{width: 200, height: 200}} /> 

    </view>
  );  

}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 10,

  },
});
export default TestScreen;