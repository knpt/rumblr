import { StackNavigator } from 'react-navigation';
import Questionnaire from './Questionnaire'
import HomeScreen from './Home'

export default HomeNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Quiz: { screen: Questionnaire },
});