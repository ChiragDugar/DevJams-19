import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet, AppState } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as TaskManager from 'expo-task-manager';
import Login from './Login';



const LOCATION_TASK_NAME = 'background-location-task';

export default class LocationGetter extends Component {
  state = {
    location: null,
    errorMessage: null,
    appState: AppState.currentState
  };

  handleAppStateChange = (nextAppState) =>{
    if(this.state.appState.match(/inactive|background/) && nextAppState === 'active'){
      console.log("App has come to the foreground!")
      this._getLocationAsync()
      this.onPress()
    }
    this.setState({ appState: nextAppState })
  }


  componentWillMount() {
    AppState.addEventListener('change',this.handleAppStateChange)
    
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  componentWillUnmount(){
    AppState.removeEventListener('change',this.handleAppStateChange)
  }

  onPress = async () => {
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.High,
      timeInterval: 100,
      distanceInterval: 1
    });
  }

  _getLocationAsync = async () => {
    try{
      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      if (status !== 'granted') {
        this.setState({
          errorMessage: 'Permission to access location was denied',
        });
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location });
    }
    catch(error){
      let status = Location.getProviderStatusAsync()
      if(!status.locationServicesEnabled){
        console.log("Enable Location Services")
      }
    }

  };

  static navigationOptions = () => ({
    header:null
})

  render() {
    
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
      console.log("Location",text)
    }
    return (
      <View>
        {/* <Text style={styles.paragraph}>{text}</Text> */}
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});

TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    console.log("An error has occured")
    return;
  }
  if (data) {
    const { locations } = data;
  }
});




// import React from 'react';
// import { Text, TouchableOpacity } from 'react-native';
// import * as TaskManager from 'expo-task-manager';
// import * as Location from 'expo-location';

// const LOCATION_TASK_NAME = 'background-location-task';

// export default class Component extends React.Component {

//   componentWillMount(){
//     this.onPress()
//   }

//   onPress = async () => {
//     await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
//       accuracy: Location.Accuracy.High,
//       timeInterval: 100,
//       distanceInterval: 1
//     });
//   };
  

//   render() {
//     return (
//       <TouchableOpacity>
//         <Text style={{ marginVertical: 100 }} >Enable background location</Text>
//       </TouchableOpacity>
//     );
//   }
// }

// TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
//   if (error) {
//     console.log("An error has occured")
//     return;
//   }
//   if (data) {
//     const { locations } = data;
//     console.log("######",locations)
//   }
// });


