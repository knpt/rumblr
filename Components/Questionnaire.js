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
 import {concatScore} from '../Reducers/score'



// const options = {
//   1: {a: 'Justin Bieber', b: 'Justin Trudeau'}, 
//   2: {a: 'Dog', b: 'Cat'},
//   3: {a: 'Floss?', b: 'Nope'}, 
//   4: {a: 'I love the nightlife', b: 'I love netflix'}
// }

class Questionnaire extends React.Component {
  constructor(props){
    super(props);
  }
  
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
    const questionDeck  = this.props.questionDeck
    console.log("THIS PROPS", this.props)
    
    return (
      <Image source = {require('../Images/lower-antelope-canyon.jpg')} style= {styles.container}>
        <View style = {styles.container}> 
          <TouchableOpacity
            onPress={()=> {
              this.props.dispatchScore("a"),
              navigate('Question')}}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>{questionDeck[1]["a"]}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={()=> {
              this.props.dispatchScore("b")
              navigate('Question')
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>{questionDeck[1]["b"]}</Text>
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

const mapDispatchToProps = function(dispatch){
  return {
    dispatchScore(letter){
      dispatch(concatScore(letter))
    }
  }
}
export default Questionnaire = connect(mapStateToProps, mapDispatchToProps)(Questionnaire)



// export class Question2 extends React.Component {
  
//     render(){
//       const { navigate } = this.props.navigation
//       return (
//         <ScrollView horizontal = {true} contentContainerStyle = {styles.container}>
//         <View style = {styles.container}> 
//           <TouchableOpacity
//             onPress={()=> navigate('Question')}
//             title={options[2].a}
//           >
//             <View style={styles.button}>
//               <Text style={styles.buttonText}>{options[2].a}</Text>
//             </View>
//           </TouchableOpacity>
  
//           <TouchableOpacity 
//             onPress={()=> navigate('Question')}
//             title="Next Question"
//           >
//             <View style={styles.button}>
//               <Text style={styles.buttonText}>{options[2].b}</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//        </ScrollView>
//       )
//     }
//   }



 const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#E9BDA8',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
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

// const QuestionStack = StackNavigator({
//   Home: {screen: Questionnaire},
//   Question: { screen: Question }
// });