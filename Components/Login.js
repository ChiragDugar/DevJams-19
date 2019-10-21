import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, StyleSheet, TextInput, Button } from 'react-native'
import signup_back from '../public/home_background.png'
import logo from '../public/logo.png'
import user from '../public/user.png'
import Location_Getter from './Location_Getter'
import StickyCall from './Sticky_Call'

class Login extends Component{
    static navigationOptions = () => ({
        header:null
   })

   componentDidMount(){
       console.log("Started")
   }

    render(){
        return(
            <ImageBackground source={ signup_back } style={{width: '100%', height: '100%'}} >
                <View >
                    <Image 
                        source = { logo }
                        style = { styles.logo }
                    />
                    <Text style = { styles.heading } > She needs us!</Text>
                    <Image 
                        source = { user }
                        style = {{ height: '40%', width: '40%', justifyContent: 'center', alignItems: 'center', marginTop: 30, left: 100 }}
                    />
                </View>

                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', top: -80 }} >
                    <Text style={{ left: -100, fontSize: 20 }} > Username </Text>
                    <TextInput 
                        style={{ height: 50, borderColor: 'white', borderWidth: 1, width: '80%', backgroundColor: 'rgba(255,255,255,0.68)', backgroundColor: 'rgba(255,255,255,0.68)', marginBottom: 10}} 
                    />

                    <Text style={{ left: -100, fontSize: 20 }} > Password </Text>
                    <TextInput 
                        style={{ height: 50, borderColor: 'white', borderWidth: 1, width: '80%', backgroundColor: 'rgba(255,255,255,0.68)', marginBottom: 10}} 
                    />

                    <Button 
                        title = "Login"
                        color = "#F0437A"
                        style={{ paddingTop: '30', fontSize: 16 }}
                        onPress = { ()=> this.props.navigation.navigate('StickyCall') }
                    />

                    <Text style={{ color: 'black', marginTop: 10, textDecorationLine: 'underline', fontSize: 16 }}> Forgot Password? </Text>
                </View>

                <View style={{ backgroundColor: '#F0437A', height: 100, width: 100, borderRadius: 50, left: '76%', justifyContent: 'center', alignItems: 'center', bottom: 30}} >
                    <Text style={{ bottom: 10, color: 'white', fontSize: 16 }} onPress={()=> this.props.navigation.navigate('SignUp')} >Sign up!</Text>
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 90,
        height: 90,
        position: 'absolute',
        left: -20,
        top: -10
    },
    heading: {
        // position: 'relative'
        left: 50,
        padding: 30,
        fontSize: 20,
        color: 'white'
    }
})


export default Login