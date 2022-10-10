import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TextInput} from 'react-native';
import Intro from './wellcome/intro';
import Signup from './wellcome/signup';
import Signin from './wellcome/signin';
import MainNavigator from './wellcome/nav';
export default function App() {
  return (
    <MainNavigator>

     </MainNavigator>
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



// import React from 'react'
// import {createBottomTabNavigator} from 'react-navigation'
// import HomePage from "./src/components/HomePage"
// import LoginPage from "./src/components/LoginPage"
// import Ionicons from 'react-native-vector-icons/Ionicons'

// const iconMap = {
//     Home: 'ios-home',
//     Login: 'ios-contact'
// }

// export default createBottomTabNavigator(
//     {
//         Login: LoginPage,
//         Home: HomePage
//     },
//     {
//         navigationOptions: ({navigation}) => ({
//             tabBarIcon: ({focused, tintColor}) => {
//                 const {routeName} = navigation.state
//                 const iconName = iconMap[routeName] || 'ios-information'

//                 return <Ionicons name={iconName} size={25} color={tintColor}/>;
//             },
//         }),
//         tabBarOptions: {
//             activeTintColor: 'tomato',
//             inactiveTintColor: 'gray',
//         },
//     }
// )
