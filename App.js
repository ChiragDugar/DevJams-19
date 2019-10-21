import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Home from './Components/Home'
import StickyCall from './Components/Sticky_Call'
import LocationGetter from './Components/Location_Getter';

const MainNavigator = createStackNavigator({
  Home: Login,
  Login: Login,
  SignUp: SignUp,
  Main: Home,
  StickyCall: StickyCall,
  Location: LocationGetter
});
 
const App = createAppContainer(MainNavigator);

export default App;