/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import BookingsScreen from '../screens/BookingsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {Images} from '../constants/Images';
import {Image, StyleSheet, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = Images.home;
          } else if (route.name === 'Bookings') {
            iconName = Images.bookings;
          } else if (route.name === 'Messages') {
            iconName = Images.message;
          } else if (route.name === 'Profile') {
            iconName = Images.user;
          }

          return <Image source={iconName} style={styles.icon} />;
        },
        tabBarLabel: ({focused}) => (
          <Text style={[styles.tabLabel, focused && styles.activeTabLabel]}>
            {route.name === 'HomeTab' ? 'Home' : route.name}
          </Text>
        ),
        headerShown: false,
        tabBarActiveTintColor: 'rgba(84, 84, 84, 1)',
        tabBarInactiveTintColor: 'rgba(84, 84, 84, 1)',
      })}>
      <Tab.Screen
        name="HomeTab"
        component={StackNavigator}
        options={{title: 'Home'}}
      />
      <Tab.Screen name="Bookings" component={BookingsScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
  },
  tabLabel: {
    fontSize: 12,
    fontFamily: 'Outfit-Regular',
    color: 'rgba(84, 84, 84, 1)',
  },
  activeTabLabel: {
    fontFamily: 'Outfit-Bold',
  },
});
