import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import Request from './Request'

// const MusicRoute = () => <Text> Hellor </Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

export default class MyComponent extends React.Component {

    static navigationOptions = () => ({
        header:null
    })
    
    state = {
    index: 0,
    routes: [
      { key: 'Home', title: 'Home', icon: 'queue-music' },
      { key: 'Request', title: 'Request', icon: 'album' },
      { key: 'recents', title: 'Recents', icon: 'history' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  

  shouldComponentUpdate(){
    renderScene = BottomNavigation.SceneMap({
        Home: Home,  
        Request: Request,
        recents: SignUp,
      });
    return true;
  }

  render() {
    return (
        <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene= {({route,jumpTo}) => {
            switch (route.key) {
                case 'Home':
                  return <Home />;
                case 'Request':
                  return <Request />;
                case 'recents':
                    return <SignUp />;  
              }
        }}
      />
      
    );
  }
}

// import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import SignUp from './SignUp';
// import Login from './Login';
// import Home from './Home';

// export default createMaterialBottomTabNavigator(
//     {
//     //   Home: Home,
//       SignUp: SignUp,
//       Login: Login
//     },
//     {
//       initialRouteName: 'SignUp',
//       activeColor: '#f0edf6',
//       inactiveColor: '#3e2465',
//       barStyle: { backgroundColor: '#694fad' },
//     }
//   );