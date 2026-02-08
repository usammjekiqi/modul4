import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './screens/FirstScreen';
import  SecondScreen from './screens/SecondScreen';
import  pamja from './screens/pamja';
import  pamja4 from './screens/pamja4';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='pamja1'>
        <Stack.Screen name="pamja1" component={FirstScreen} ></Stack.Screen>
        <Stack.Screen name="pamja2" component={SecondScreen} ></Stack.Screen>
        <Stack.Screen name="pamja3" component={pamja} ></Stack.Screen>
        <Stack.Screen name="pamja4" component={pamja4} ></Stack.Screen>
      </Stack.Navigator>
      
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
