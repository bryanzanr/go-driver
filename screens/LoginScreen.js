import React, { Component } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet, 
Platform, StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from '../navigation/AppNavigator';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isLoadingComplete: false,
      username: '',
      password: '',
      greetText: 'Welcome',
      userText: 'Username',
      passwordText: 'Password',
      asText: 'Login as',
      forgotText: 'Forgot Password'
    };
  }

  

  onLogin() {
    const { username, password } = this.state;
    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Text style={styles.greetText}>
            {this.state.greetText}
          </Text>
          <Text style={styles.loginText}>
            {this.state.userText}
          </Text>
          <TextInput
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
            placeholder={'Username'}
            style={styles.input}
          />
          <Text style={styles.loginText}>
            {this.state.passwordText}
          </Text>
          <TextInput
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}
            placeholder={'Password'}
            secureTextEntry={true}
            style={styles.input}
          />
          <Text style={styles.asText}>
            {this.state.asText}
          </Text>
          <Button
            title={'Login'}
            style={styles.input}
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Text style={styles.forgotText}>
            {this.state.forgotText}
          </Text>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      // Asset.loadAsync([
      //   require('./assets/images/robot-dev.png'),
      //   require('./assets/images/robot-prod.png'),
      // ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        // ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'italic': require('../assets/fonts/italic.ttf'),
        'semi_bold': require('../assets/fonts/semi_bold.ttf'),
        'regular': require('../assets/fonts/regular.ttf'),
        'medium': require('../assets/fonts/medium.ttf'),
      }),
    ]);
  };

    _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

}

const styles = StyleSheet.create({
  greetText: {
    fontSize: 30,
    fontFamily: 'regular',
    color: '#fff',
    marginBottom: 24,
  },
  loginText: {
    fontFamily: 'semi_bold',
    color: '#fff',
  },
  forgotText: {
    fontFamily: 'italic',
    color: '#fff',
  },
  asText: {
    fontSize: 12,
    color: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4285f4',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 10,
    fontFamily: 'medium',
    fontSize: 16,
    color: '#fff',
  },
});

