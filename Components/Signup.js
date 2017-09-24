import React from 'react'
import {
  Text,
  TextInput,
  View,
  Button, 
  StyleSheet,
  Image
} from 'react-native'
import Login from './Login';


export default class Signup extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      loaded: true,
      email: '',
      password: ''
    };
  }

  signup(){
    this.setState({
      loaded: false
    })
    //more
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
            title="sign up"
            onPress={this.signup.bind(this)} 
           />

          <Button 
            title="back to login"
            onPress={() => navigate('Login')} 
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