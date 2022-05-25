import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from './screens/LoginScreen';
const Stack = createStackNavigator(); //creating the stack
const screenOptions = {
  headerShown: false,
};
export const SignedInStack = () => (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={screenOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

export default SignedInStack;
