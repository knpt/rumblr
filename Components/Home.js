
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
import {sendLocationThunk} from '../Reducers/location'


class HomeScreen extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      location: ''
    }
  } 

    componentDidMount(){
      this.props.fetchQuestions();

      var getPosition = function (options) {
        return new Promise(function (resolve, reject) {
          navigator.geolocation.getCurrentPosition(resolve, reject, options);
        });
      }
      
      getPosition()
        .then((position) => {
          console.log(position);
          const latitude = position.coords.latitude
          const longitude = position.coords.longitude
          this.setState({location: {latitude, longitude}});
          this.props.sendLocation({latitude, longitude})
        })
        .catch((err) => {
          console.error(err.message);
        });
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
    console.log("THIS STATE LOCATION", this.state.location)
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
           title="login/signup"
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
    }, 
    sendLocation: function(location){
      dispatch(sendLocationThunk(location))
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






