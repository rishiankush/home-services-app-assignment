import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MyBookmarkScreen from '../screens/MyBookmarkScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MyBookmark" component={MyBookmarkScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
