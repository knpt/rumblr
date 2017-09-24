import React from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  Image,
  Button, 
 } from 'react-native';
 import { DrawerNavigator} from 'react-navigation';
 import HomeScreen from './Home'

class OptionsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: () => (
      <Image
        source={require('../Images/rlogo.png')}
        style = {styles.icon}
      />
    ),
  };

  render() {
    return (
      <Image source = {require('../Images/hearts.jpg')} style = {styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title= 'Wait for a Buzz from your One True Love'
        />
      </Image>
    );
  }
}

class NotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Your matches',
    drawerIcon: () => (
      <Image
        source={require('../Images/rlogo.png')}
        style = {styles.icon}
      />
    ),
  };

  render() {
    return (
      <Image source = {require('../Images/hearts.jpg')} style = {styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('HomeScreen')}
          title="Take The Quiz Again"
        />
      </Image>
    );
  }
}


 const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height:'100%',
    backgroundColor: 'transparent'
  }, 
});


export default Drawer = DrawerNavigator({
  Home: {
    screen: OptionsScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  },
  // HomeScreen: {
  //   screen: HomeScreen
  // }
});
