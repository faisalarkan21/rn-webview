import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import Home from '../screens/HomeScreen';

const AppNavigatorStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: Home,
  },
  initialRouteName: 'Home',
});

export const AppNavigator = createAppContainer(AppNavigatorStack);
