import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './intro';
import Signin from './signin';
import Signup from './signup';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
    >
      <Stack.Screen name="Home" component={Intro} />
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
}
const MainNavigator = () => {
    return(
      <NavigationContainer>
          <StackNavigator>
  
          </StackNavigator>
      </NavigationContainer>
    )
  }
export default MainNavigator;