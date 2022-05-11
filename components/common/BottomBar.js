import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../screen/HomePage'

const Tab = createBottomTabNavigator();
const BottomBar = () => {
    return (
        <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={HomePage}
        options={{
          tabBarLabel: 'Updates',
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomePage}
        options={{
          tabBarLabel: 'Profile',
          
        }}
      />
    </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    bottom_bar:{
        height:50,
        position:"fixed",
        bottom:0,
        backgroundColor:"black"
    }
})

export default BottomBar;
