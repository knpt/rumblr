
import store from '../Reducers/index'
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button, 
  Navigator,
  Image,
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
    title: <Image source = {require('../Images/logo1.png')}></Image>,
    headerStyle: {
      backgroundColor: '#F0DDE7',
      paddingTop: 30,
      paddingBottom: 20
    }
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
    <Image source = {require('../Images/rock.jpg')} style = {styles.container}>
      <View style = {styles.header}>
        <Image style={styles.imagestyle} source = {require('../Images/Rr-5x.png')}/>
      </View>
      <View >
        <Text style = {styles.textstyle}>Are You Ready To Rumble?</Text>
        <Button
           onPress={() => navigate('Quiz')}
           title="Take The Quiz!"
         /> 
         <Button
           onPress={() => navigate('Login')}
           title="Login"
         /> 
      </View>
    </Image>
    )
  }
}

const mapStateToProps = state => {
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
    // backgroundColor: '#E9BDA8',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height:'100%',
    backgroundColor: 'transparent'
  }, 
  textstyle: {
    fontSize: 20,
    color: 'white'
  }
});



export default Home = connect(mapStateToProps, mapDispatchToProps)(HomeScreen)






