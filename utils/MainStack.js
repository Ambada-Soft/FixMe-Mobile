import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/Login/LoginScreen.js';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: LoginScreen
    },
  }, 
  {
    initialRouteName: 'Home',
  }
);

const MainApp = createAppContainer(MainStack);

export default MainApp;