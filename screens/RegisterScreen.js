// import React, { Component, PropTypes } from "react";
// import AuthLayout from "../components/layouts/AuthLayout";
// import { InputInline, Clearfix, ButtonInline } from "../components/elements";

// export default class App extends Component {
//   render() {
//     return (
//       <AuthLayout
//         title="Login"
//         onBack={() => this.props.navigation.goBack(null)}
//       >
//         <InputInline first label="First Name" placeholder="Tung" />
//         <InputInline label="Last Name" placeholder="Phan" />
//         <InputInline label="Email" placeholder="Email address" />
//         <InputInline label="Password" placeholder="Required" />
//         <Clearfix height={16} />
//         <ButtonInline
//           onPress={() => this.props.navigation.navigate("Dashboard")}
//         >
//           Register
//         </ButtonInline>
//       </AuthLayout>
//     );
//   }
// }

import React from 'react';
import { FlatList, ActivityIndicator, Text, 
  View, StyleSheet, Button } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String,
  repeat_password: t.maybe(t.String),
  is_driver: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'black',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    username: {
      error: 'You have to define the username of your account'
    },
    password: {
      error: 'Fill the account password'
    },
    is_driver: {
      label: 'Driver',
    },
  },
  stylesheet: formStyles,
};

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
  handleSubmit = () => {
    const value = this._form.getValue();
    if (value === null) return alert('Invalid Login, No input specified.');
    return fetch('https://go-pay-sea-cfx.herokuapp.com/api/rest-auth/registration/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: value.username,
        password1: value.password,
        password2: value.repeat_password,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      let token = {
        dataSource: responseJson.key,
        userId: value.username,
      };
      if (value.is_driver) this.props.navigation.navigate('Driver', {
        userToken: token,
      });
      else this.props.navigation.navigate('Customer', {
        userToken: token,
      });
      // this.setState({
      //   isLoading: false,
      //   dataSource: responseJson.key,
      // }, function(){
      // });
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  // componentDidMount(){
    // return fetch('https://facebook.github.io/react-native/movies.json')
  // }
  render(){
    if(this.state.isLoading){
      // return(
      //   <View style={{flex: 1, padding: 20}}>
      //     <ActivityIndicator/>
      //   </View>
      // )
      return (
        <View style={styles.container}>
          <Form 
            ref={c => this._form = c}
            type={User} 
            options={options}
          />
          <Button
            title="Register"
            onPress={this.handleSubmit}
          />
        </View>
      );
    }
    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }

  // render() {
  //   return (
  //     <ScrollView style={styles.container}>
  //       {/* Go ahead and delete ExpoLinksView and replace it with your
  //          * content, we just wanted to provide you with some helpful links */}
  //       <ExpoLinksView />
  //     </ScrollView>
  //   );
  // }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 15,
//     backgroundColor: '#fff',
//   },
// });

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});