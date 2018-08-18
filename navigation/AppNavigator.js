import {
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import LoginScreen from '.././screens/LoginScreen';
import RegisterScreen from '.././screens/RegisterScreen';
import DriverTabNavigator from './MainTabNavigator';
import CustomerTabNavigator from './CustomerTabNavigator';
// import BypassHome from '.././screens/home/index';
// import DirectionScreen from '../screens/direction-pending/index';

const AuthenticationNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const RegisterNavigator = createStackNavigator({
  Register: { screen: RegisterScreen },
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

// const BypassCustomer = createStackNavigator({
//   Home: { screen: BypassHome },
// },{
//     headerMode: 'none',
//     navigationOptions: {
//         headerVisible: false,
//     }
// });

// const BypassDirection = createStackNavigator({
//   Pending: { screen: DirectionScreen },
// },{
//     headerMode: 'none',
//     navigationOptions: {
//         headerVisible: false,
//     }
// });

const AppNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: AuthenticationNavigator,
  Register: RegisterNavigator,
  Driver: DriverTabNavigator,
  Customer: CustomerTabNavigator,
//   Customer: BypassCustomer,
//   directionPending: BypassDirection,
});

export default AppNavigator;