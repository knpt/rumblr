import React from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  Image,
  Button, 
  Alert, 
  ScrollView,
  TouchableOpacity,
  
 } from 'react-native';
 import { StackNavigator } from 'react-navigation';

import * as firebase from 'firebase';
 
 // Initialize Firebase
//  const firebaseConfig = {
//    apiKey: "AIzaSyBDCMXQqHx4E9DKRjNE7eVzOIR11wF3ehI",
//    authDomain: "rumblr-f1dad.firebaseapp.com",
//    databaseURL: "https://rumblr-f1dad.firebaseio.com",
//    storageBucket: "rumblr-f1dad.appspot.com",
//  };
//  const firebaseApp = firebase.initializeApp(firebaseConfig);

//  const database = firebaseApp.database()


const options = {
  1: {a: 'Justin Bieber', b: 'Justin Trudeau'}, 
  2: {a: 'Dog', b: 'Cat'},
  3: {a: 'Floss?', b: 'No Floss'}
}

export class Questionnaire extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { navigate } = this.props.navigation
    return (
      <ScrollView horizontal = {true} contentContainerStyle = {styles.container}>
        <View style = {styles.container}> 
          <TouchableOpacity
            onPress={()=> {console.log("HI", navigate('Question'))}}
            title={options.a}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>{options[1].a}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={()=> navigate('Question')}
            title="Next Question"
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>{options[1].b}</Text>
            </View>
          </TouchableOpacity>
        </View>
       </ScrollView>
    )
  }
}

class Question extends React.Component {

  render(){
    const { navigate } = this.props.navigation
    return (
      <ScrollView horizontal = {true} contentContainerStyle = {styles.container}>
      <View style = {styles.container}> 
        <TouchableOpacity
          onPress={()=> navigate('Question')}
          title={options[2].a}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>{options[2].a}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={()=> navigate('Question')}
          title="Next Question"
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>{options[2].b}</Text>
          </View>
        </TouchableOpacity>
      </View>
     </ScrollView>
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
  button: {
    marginBottom: 30,
    width: 260,
    height: 200,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 80,
    color: 'white'
  }
});

export default QuestionStack = StackNavigator({
  Home: {screen: Questionnaire},
  Question: { screen: Question }
});