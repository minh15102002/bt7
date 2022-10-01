import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './intro';
import Signin from './signin';
import Signup from './signup';
import Home from './home';
//import * as React from 'react';
//import 'react-native-gesture-handler';
//import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createStackNavigator();
//const Drawer = createDrawerNavigator();

const Index=()=> {
  return (
    <NavigationContainer>
    <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
    >
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Index;