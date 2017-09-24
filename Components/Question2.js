
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
 import { connect } from 'react-redux'


const options = {
  1: {a: 'Justin Bieber', b: 'Justin Trudeau'}, 
  2: {a: 'Dog', b: 'Cat'},
  3: {a: 'Floss?', b: 'Nope'}, 
  4: {a: 'I love the nightlife', b: 'I love netflix'}
}
class Question2 extends React.Component {

  static navigationOptions = {
    title: <Image source = {require('../Images/logo1.png')}></Image>,
    headerStyle: {
      backgroundColor: '#F0DDE7',
      paddingTop: 30,
      paddingBottom: 20
    }
  };

    render(){
      const { navigate } = this.props.navigation
      console.log("THIS.PROPS IN QUESTION", this.props)
      return (
      <Image source = {require('../Images/lower-antelope-canyon.jpg')} style= {styles.container}>
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
       </Image>
      )
    }
  }


  const mapStateToProps = state => {
    return {
      questionDeck: state.questionDeck,
      score: state.score
    }
  }

  export default Question2 = connect(mapStateToProps)(Question2)
  

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height:'100%',
    backgroundColor: 'transparent',
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
