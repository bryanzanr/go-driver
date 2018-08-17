import React from 'react';
import { FlatList, ActivityIndicator, Text, 
  View, StyleSheet, Button } from 'react-native';
// import { ExpoLinksView } from '@expo/samples';

import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  changed_balance: t.String,
  description: t.maybe(t.String),
  account: t.String,
  finished: t.Boolean
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
      color: 'blue',
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
    changed_balance: {
      error: 'You have to define the amount of the balance to refund from your account'
    },
    account: {
      error: 'Fill the account number'
    },
    finished: {
      label: 'Finished',
    },
  },
  stylesheet: formStyles,
};

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
    return fetch('https://go-pay-sea-cfx.herokuapp.com/api/transaction/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        changed_balance: 'yourValue',
        description: 'yourOtherValue',
        finished: true,
        account: 10,
      }),
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      }, function(){
      });
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
            title="Refund"
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

