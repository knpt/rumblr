import { StackNavigator } from 'react-navigation';
import Questionnaire from './Questionnaire'
import HomeScreen from './Home'
import Login from './Login'
import Signup from './Signup'
import Drawer from './Drawer'

export default HomeNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Quiz: { screen: Questionnaire},
  Login: { screen: Login },
  Signup: {screen: Signup},
  Drawer: {screen: Drawer}
});