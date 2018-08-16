import {
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import LoginScreen from '.././screens/LoginScreen';
import MainTabNavigator from './MainTabNavigator';

const AuthenticationNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const AppNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Auth: AuthenticationNavigator,
  Home: MainTabNavigator,
});

export default AppNavigator;