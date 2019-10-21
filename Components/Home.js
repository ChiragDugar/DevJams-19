import React, { Component } from 'react'
import { View, Text,ImageBackground, Image, TextInput } from 'react-native'
import background from '../public/home_background.png'
import logo from '../public/logo.png'
import StickyFooter from './Sticky_Footer'
import Header from './Header'
// import { TextInput } from 'react-native-gesture-handler'
// import * as Font from 'expo-font';

class Home extends Component{

    state = ({
        msg: []
    })

    // componentDidMount() {
    //     Font.loadAsync({
    //         chalkdust: require('../assets/fonts/chalkdust.ttf'),
    //     });
    // }

    componentDidMount(){
        console.log("Started")
        fetch('http://192.168.43.176:3000/find-thread',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "coordinates": [79.147122,12.976481]
                // "createdBy": "5dacc1fa004ad95d2a1eb6cd",
            })
        })
        .then((response)=> response.json())
        .then(data=>{
            this.setState({
                msg: data
            })
        })
        .catch(err=>{
            console.log(err.message)
        })
    }

    static navigationOptions = () => ({
        header:null
    })
    render(){  
        return(
            <ImageBackground source={ background } style={{width: '100%', height: '100%'}} >
                <Header />
                { this.state.msg.length > 0 && this.state.msg.map((item) => {
                        {console.log("This is", item)}
                        return(
                        <View style={{ paddingTop: 10, paddingLeft: 50, borderBottomWidth: 1}} >
                            <Text style={{ fontSize: 20 }} > Shruti Shah </Text>
                            <Text style={{ fontSize: 18 }} >Need:{ item.threadName }  </Text>
                            <Text style={{ paddingBottom: 10, fontSize: 18 }} >Option: { item.costTocost ? "CFC" : "" }{","}{item.socialService ? "SS":""}, {","}{ item.extraPayment ? "EP" : "" } </Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', left: -27 }} >
                                <View style={{ width: '50%', backgroundColor: 'rgba(17,166,83,0.5)', justifyContent: 'center', height: 30 }} >
                                    <Text style={{ fontSize: 20, textAlign: 'center' }} >Accept</Text>
                                </View>
                                <View style={{ width: '50%', backgroundColor: 'rgba(231,72,79,0.5)', justifyContent: 'center' , height: 30}} >
                                    <Text style={{ fontSize: 20, textAlign: 'center' }} >Later</Text>
                                </View>
                            </View>
                        </View>
                        )
                }) }
                
            </ImageBackground>
        )
    }
}

export default Home