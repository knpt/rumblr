
import store from '../Reducers/index'
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button, 
  Alert, 
  Navigator
} from 'react-native';
import { connect } from 'react-redux'
import { fetchQuestionsThunk } from '../Reducers/questions'



class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    } 
  
    componentDidMount(){
      this.props.fetchQuestions();
    }

  static navigationOptions = {
    title: 'RUMBLR',
  };
  render() {


    console.log("this.props.questionDeck", this.props.questionDeck)

    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <Text>Are You Ready To Rumble?</Text>
        <Button
           onPress={() => navigate('Quiz', {user: 'Kimberly'})}
           title="Take The Quiz!"
         /> 
    </View>
    )
  }
}

const mapStateToProps = state => {
  console.log("AM I HERE")
  return {
    questionDeck: state.questionDeck
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: function(){
      dispatch(fetchQuestionsThunk())
    }
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



export default Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)






