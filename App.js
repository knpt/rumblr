
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button, 
  Alert
} from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'RUMBLR',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <Text>Are You Ready To Rumble?</Text>
        <Button
           onPress={() => navigate('Quiz')}
           title="Take The Quiz!"
         />
    </View>
    )
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'QUIZZY QUIZ',
  };
  render() {
    return (
      <View>
        <Text>Quiz Here</Text>
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
});

export default SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Quiz: { screen: ChatScreen},
});



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
