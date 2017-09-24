import { StackNavigator } from 'react-navigation';
import Questionnaire from './Questionnaire'
import HomeScreen from './Home'
import Question2 from './Question2'
import Login from './Login'
import Signup from './Signup'
import Drawer from './Drawer'

export default HomeNavigator = StackNavigator({
  Home: { screen: Login },
  Quiz: { screen: Questionnaire},
  Question: { screen: Question2 },
  Login: { screen: Login },
  Signup: {screen: Signup},
  Drawer: {screen: Drawer}
});