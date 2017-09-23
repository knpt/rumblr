import React from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  Image,
  Button, 
  Alert, 
  ScrollView
 } from 'react-native';

export default class Questionnaire extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <ScrollView horizontal = {true} contentContainerStyle = {styles.container}>
     
        <Text> Justin Bieber or Justin Trudeau? </Text>

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
});