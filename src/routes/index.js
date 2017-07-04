import  HomeScreen from './Home/index';
import  LoginScreen  from './Login/index';
import  UploadScreen  from './Upload/index';
import  FormScreen  from './Form/index';
import { StackNavigator } from 'react-navigation';

const RouteConfigs = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home'
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login'
    }
  },
  Upload: {
    screen: UploadScreen,
    navigationOptions: {
      title: 'Upload'
    }
  },
  Form: {
    screen: FormScreen,
    navigationOptions: {
      title: 'Form'
    }
  },
};

const StackNavigatorConfig = {
  initialRouteName: 'Home'
};

export const Navigation = StackNavigator(RouteConfigs, StackNavigatorConfig);

