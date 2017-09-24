import React from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  View, 
  Button, 
  AsyncStorage, 
  Image,
  Navigator
} from 'react-native';
import {firebaseApp} from '../Reducers/database'
import Signup from './Signup'
import {StackNavigator} from 'react-navigation'

export default class Login extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
    }
    this.login = this.login.bind(this)
  }

  login(){
    const { navigate } = this.props.navigation
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('yo check your password!!');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    })
    .then(()=> navigate('Drawer'))
  }

  render(){
    const { navigate } = this.props.navigation
    return (
      <View style = {styles.container}>
        <View>
          <Image source = {require('../Images/logo2.png')}/>
        </View>
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
          onPress={this.login}
          style={styles.primary_button}
          title="login"
        />

        <Button
          text="Sign Up"
          onPress={() => navigate('Signup')}
          title="go to sign up"
        />
        </View>
      </View> 
    )
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
  },
})