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
import { connect } from 'react-redux'
import Login from './Login';
import {firebaseApp} from '../Reducers/database'
import { StackNavigator } from 'react-navigation';
import {setUserIdThunk} from '../Reducers/user'

class Signup extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      location: ''
    };
    this.signup = this.signup.bind(this)
  }

  static navigationOptions = {
    // title: <Image source = {require('../Images/logo1.png')}></Image>,
    headerStyle: {
      backgroundColor: '#F0DDE7',
      paddingTop: 30,
      paddingBottom: 20
    }
  };

  signup(){
    const { navigate } = this.props.navigation
    const username= this.state.email.split('@')[0]
   
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        this.setState({location: {latitude, longitude}});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
    
    
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then((user)=> {
      firebaseApp.database().ref('users').child(user.uid).set(username.toLowerCase())
      return user
    })
    .then((user)=> {
      firebaseApp.database().ref(`users/${user.uid}`).child(username).set({location: this.state.location})
      return user.uid
    })
    .then((userid)=> {
      this.props.dispatchSetUserId(userid)
    })
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
  .then(()=> navigate('Quiz'))
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
            title="tap here to sign up"
            onPress={this.signup} 
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

const mapDispatchToProps = function(dispatch){
  return {
    dispatchSetUserId(uid){
      dispatch(setUserIdThunk(uid))
    }
  }
}

const mapStateToProps = ()=> {return {}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0DDE7',
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

export default Signup = connect(mapStateToProps, mapDispatchToProps)(Signup)