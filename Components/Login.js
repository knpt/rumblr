import React from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  View, 
  Button, 
  AsyncStorage, 
  navigator
} from 'react-native';
import * as firebase from 'firebase'
import Signup from './Signup'
import {StackNavigator} from 'react-navigation'

export default class Login extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      loaded: true
    }
  }

  render(){
    const { navigate } = this.props.navigation
    return (
      <View style = {styles.container}>
        <View>
        <TextInput
          onChangeText={(text)=> this.setState({email: text})}
          style={styles.textInput}
          value= {this.state.email}
          placeholder={"Email Address"}
        />
        <TextInput
          onChangeText={(text)=> this.setState({password: text})}
          value= {this.state.password}
          style={styles.textInput}
          secureTextEntry= {true}
          placeholder={"Password"}
        />

        <Button      
          text="Login"
          onPress={this.login.bind(this)}
          style={styles.primary_button}
          title="login"
        />

        <Button
          text="Sign Up"
          onPress={() => navigate('Signup')}
          title="signup"
        />
        </View>
      </View> 
    )
  }

  login(){
    this.setState({
      loaded: false
    });
    firebaseApp.authWithPassword({
      "email": this.state.email,
      "password": this.state.password
    }, (error, user_data) => {
      this.setState({
        loaded: true
      });
      if(error){
        alert('Womp! Please Try Again')
      } else {
        AsyncStorage.setItem('user_data', JSON.stringify(user_data));
        this.props.navigator.push({
          component: Account
        })
      }
    })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9BDA8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: 'white',
    borderWidth: 1
  },
  primary_button: {
    margin: 20,
    padding: 15,
    backgroundColor: '#529ecc'
  },
  primary_button_text: {
    color: '#FFF',
    fontSize: 18
  }
})