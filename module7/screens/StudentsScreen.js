import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import StudentDetails from '../components/StudentDetails';

const StudentsScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.text}>StudentsScreen</Text>
      <StudentDetails name="usam" />
      <StudentDetails name="leart" />
      <StudentDetails name="olis" />

    </View>
  );  

}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,

  },
});
export default StudentsScreen;