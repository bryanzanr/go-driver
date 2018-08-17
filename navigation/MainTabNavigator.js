import React from 'react';
import { Image, Platform } from 'react-native';
// import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
// import HomeScreen from '../screens/HomeScreen';
import HomeScreen from '../screens/home/index';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

// const HomeStack = createStackNavigator({
//   Home: HomeScreen,
// });
const HomeStack = createSwitchNavigator({
  Home: HomeScreen,
});

// HomeStack.navigationOptions = {
//   tabBarLabel: 'Driver',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-information-circle${focused ? '' : '-outline'}`
//           : 'md-information-circle'
//       }
//     />
//   ),
// };
HomeStack.navigationOptions = {
  tabBarLabel: 'Driver',
  tabBarIcon: ({ focused }) => (
    <Image
      source={require('../assets/images/scooter.png')}
      fadeDuration={0}
      style={{width: 20, height: 20}}
    />
  ),
};

// const LinksStack = createStackNavigator({
//   Links: LinksScreen,
// });
const LinksStack = createSwitchNavigator({
  Links: LinksScreen,
});

// LinksStack.navigationOptions = {
//   tabBarLabel: 'Pay',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
//     />
//   ),
// };
LinksStack.navigationOptions = {
  tabBarLabel: 'Pay',
  tabBarIcon: ({ focused }) => (
    <Image
      source={require('../assets/images/money.png')}
      fadeDuration={0}
      style={{width: 20, height: 20}}
    />
  ),
};

// const SettingsStack = createStackNavigator({
//   Settings: SettingsScreen,
// });
const SettingsStack = createSwitchNavigator({
  Settings: SettingsScreen,
});

// SettingsStack.navigationOptions = {
//   tabBarLabel: 'Profile',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
//     />
//   ),
// };
SettingsStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <Image
      source={require('../assets/images/profile.png')}
      fadeDuration={0}
      style={{width: 20, height: 20}}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
});
