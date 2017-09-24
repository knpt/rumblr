import React from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  Image,
  Button, 
 } from 'react-native';
 import { DrawerNavigator} from 'react-navigation';

class OptionsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../cat.jpg')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style = {styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
}

class NotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../cat.jpg')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style= {styles.container}>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
      </View>
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
    backgroundColor: '#E9BDA8',
    alignItems: 'center',
    justifyContent: 'center',
  }
});


export default Drawer = DrawerNavigator({
  Home: {
    screen: OptionsScreen,
  },
  Notifications: {
    screen: NotificationsScreen,
  },
});
