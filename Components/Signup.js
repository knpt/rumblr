import React from 'react'
import {
  Text,
  TextInput,
  View,
  Button, 
  StyleSheet,
  Navigator,
  Image
} from 'react-native'
import Login from './Login';
import {firebaseApp} from '../Reducers/database'
import { StackNavigator } from 'react-navigation';


export default class Signup extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: ''
    };
    this.signup = this.signup.bind(this)
  }

  signup(){
    const { navigate } = this.props.navigation
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
       alert('Your password stinks.');
      } else {
      alert(errorMessage);
    }
    console.log(error);
  })
  .then(()=> navigate('Home'))

  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <View>
          <Image style = {styles.imagestyle }source = {require('../Images/logo2.png')}/>
        </View>
        <View>
  		    <TextInput
    		    style={styles.textInput}
    		    onChangeText={(text) => this.setState({email: text})}
    		    value={this.state.email}
            placeholder={"Email Address"}
  		    />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
            secureTextEntry={true}
            placeholder={"Password"}
          />
          <Button 
            title="click to sign up"
            onPress={this.signup} 
           />

          <Button 
            title="back to login"
            onPress={() => navigate('Quiz')} 
           />
        </View>
      </View>
    );
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