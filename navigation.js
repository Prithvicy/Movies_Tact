import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator(); //creating the stack
const screenOptions = {
  headerShown: false,
};
export const SignedInStack = () => (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={screenOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );

export default SignedInStack;
