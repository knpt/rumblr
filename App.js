
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button, 
  Alert, 
  Navigator
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Questionnaire from './Components/Questionnaire'
import Drawer from './Components/Drawer'
import Swiper from 'react-native-swiper'

import * as firebase from 'firebase';
 

 // Initialize Firebase
 const firebaseConfig = {
   apiKey: "AIzaSyBDCMXQqHx4E9DKRjNE7eVzOIR11wF3ehI",
   authDomain: "rumblr-f1dad.firebaseapp.com",
   databaseURL: "https://rumblr-f1dad.firebaseio.com",
   storageBucket: "rumblr-f1dad.appspot.com",
 };

 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const database = firebaseApp.database()



class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      questionDeck: []
    }
    this.loadQuestionDeck = this.loadQuestionDeck.bind(this)
  };

  componentDidMount(){
   this.loadQuestionDeck()
  }

  loadQuestionDeck(){
    database.ref().once('value')
      .then(snapshot=>{
        this.setState({questionDeck: snapshot.val()})
      })
    } 
  

  static navigationOptions = {
    title: 'RUMBLR',
  };
  render() {

    console.log("STATE!!", this.state)

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

// // class ChatScreen extends React.Component {
// //   static navigationOptions = ({ navigation }) => ({
// //     title: `Welcome, ${navigation.state.params.user}`
// //   });
  
// //   render() {
// //     const { params } = this.props.navigation.state;
// //     return (
// //       <View>
// //         <Text>Quiz Here {params.user}</Text>
// //       </View>
// //     );
// //   }
// // }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9BDA8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Quiz: { screen: Questionnaire },
});



// import React, {
//   AppRegistry,
//   Component,
//   Text,
//   View,
//   Navigator,
//   AsyncStorage
// } from 'react-native';

// import Signup from './Pages/signup';
// import Account from './Pages/account';

// import Header from './Components/header';

// import Firebase from 'firebase';

// let app = new Firebase("YOUR-FIREBASE-APP-URL");


// class rnfirebaseauth extends Component {    

//   constructor(props){
//     super(props);
//     this.state = {
//       component: null,
//       loaded: false
//     };
//   }

//   componentWillMount(){

//     AsyncStorage.getItem('user_data').then((user_data_json) => {

//       let user_data = JSON.parse(user_data_json);
//       let component = {component: Signup};
//       if(user_data != null){
//         app.authWithCustomToken(user_data.token, (error, authData) => {
//           if(error){
//             this.setState(component);
//           }else{
//             this.setState({component: Account});
//           }
//         });
//       }else{
//         this.setState(component);
//       }
//     });

//   }

//   render(){

//     if(this.state.component){
//       return (
//         <Navigator
//           initialRoute={{component: this.state.component}}
//           configureScene={() => {
//             return Navigator.SceneConfigs.FloatFromRight;
//           }}
//           renderScene={(route, navigator) => {
//             if(route.component){
//               return React.createElement(route.component, { navigator });
//             }
//           }}
//         />
//       );
//     }else{
//       return (
//         <View style={styles.container}>
//           <Header text="React Native Firebase Auth" loaded={this.state.loaded} />  
//           <View style={styles.body}></View>
//         </View>
//       );
//     }

//   }

// }


// import React from 'react';
// import { 
//   StyleSheet,
//   Text, 
//   View,
//   Image,
//   Button, 
//   Alert
//  } from 'react-native';

//  import {
//   StackNavigator,
// } from 'react-navigation';


//   import * as firebase from 'firebase';
 
// //  // Initialize Firebase
//  const firebaseConfig = {
//    apiKey: "AIzaSyBDCMXQqHx4E9DKRjNE7eVzOIR11wF3ehI",
//    authDomain: "rumblr-f1dad.firebaseapp.com",
//    databaseURL: "https://rumblr-f1dad.firebaseio.com",
//    storageBucket: "rumblr-f1dad.appspot.com",
//  };
//  const firebaseApp = firebase.initializeApp(firebaseConfig);

//  const database = firebaseApp.database()

// export default class App extends React.Component {
//   constructor(props){
//     super(props);
    
//   }
//   render() {
//     let pic = {
//       uri: 'https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg'
//     }
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open the developer menu.</Text>
//         <Image source = {pic} style = {{width: 193, height: 110}} />
//         <Button
//           onPress={() => { Alert.alert('You tapped the button!')}}
//           title="Press Me"
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E9BDA8',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
