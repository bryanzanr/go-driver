import {
  createStackNavigator,
} from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/EmployeeScreen';

const App = createStackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
},{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default App;