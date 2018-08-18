// import React from 'react';
// import { ExpoConfigView } from '@expo/samples';

// export default class SettingsScreen extends React.Component {
  // static navigationOptions = {
  //   header: null,
  // };

//   render() {
//     /* Go ahead and delete ExpoConfigView and replace it with your
//      * content, we just wanted to give you a quick view of your config */
//     return <ExpoConfigView />;
//   }
// }

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser, MapView, } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props){
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  // ? require('../assets/images/robot-dev.png')
                  ? require('../assets/images/8028812257913.png')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Jane Dee</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>Customer</MonoText>
            </View>

          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>Customer Side</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>Send Ride Transaction based
            on Preference and Position</MonoText>
          </View>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      // return (
      //   <Text style={styles.developmentModeText}>
      //     Development mode is enabled, your app will be slower but you can use useful development
      //     tools. {learnMoreButton}
      //   </Text>
      // );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    // return fetch('https://go-pay-sea-cfx.herokuapp.com/api/rest-auth/logout/', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   this.setState({
    //     isLoading: false,
    //     dataSource: responseJson.key,
    //   }, function(){
    //     if (value.is_driver) this.props.navigation.navigate('Driver');
    //     else this.props.navigation.navigate('Customer');
    //   });
    // })
    // .catch((error) =>{
    //   console.error(error);
    // });
    this.props.navigation.navigate('Login');
    // WebBrowser.openBrowserAsync(
    //   'https://go-pay-sea-cfx.herokuapp.com/api/account/'
    // );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

