import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, StyleSheet,KeyboardAvoidingView, TextInput, Button } from 'react-native'
import signup_back from '../public/home_background.png'
import logo from '../public/logo.png'

class SignUp extends Component{
    // static navigationOptions = () => ({
    //     title: 'SignUp',
    //     // header: { visible: false }
    // });
    static navigationOptions = () => ({
        header:null
   })
    render(){
        return(
            <ImageBackground source={ signup_back } style={{width:'100%', height: '100%'}} >

                <View >
                    <Image
                        source = { logo }
                        style = { styles.logo }
                    />
                </View>

                <KeyboardAvoidingView behavior="padding" style={{ flex:1 }}>

       
                    <View >
                        <Text style = { styles.heading1 } >Sign Up!</Text>
                    </View>

                    <View style={styles.suf}>
                       
                        <Text style= { styles.sut1 } >Name</Text>
                        <TextInput style={ styles.sutb } ></TextInput>

                        <Text style= { styles.sut1 } >Email</Text>
                        <TextInput style={ styles.sutb }></TextInput>

                        <Text style= { styles.sut1 } >Phone</Text>
                        <TextInput style={ styles.sutb } ></TextInput>

                        <Text style= { styles.sut1 } >Gender</Text>
                        <TextInput style={ styles.sutb } ></TextInput>

                        <Text style= { styles.sut1 } >Age</Text>
                        <TextInput style={ styles.sutb } ></TextInput>

                        <View style = {{display: 'flex', justifyContent:'center', alignItems: 'center', margin:20 }} >
                        <View style={ styles.subt }>
                            <Button
                                title="  Done!  "
                                color = "#F0437A"
                            />
                        </View>
                        </View>

                    </View>

                </KeyboardAvoidingView>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 130,
        height: 130,
        position: 'absolute',
        left: -30,
        top: -10
    },
    heading1: {
        left: 120,
        top:50,
        padding: 40,
        fontSize: 23,
        color: 'white',
        textDecorationLine : 'underline',
        // fontFamily : 'Chalkduster'

    },
    suf:{
        padding:10,
        margin:25
    },
    sutb:{
        backgroundColor:'white',
        // paddingLeft:5,
        // margin:15,
        marginTop:3,
        marginLeft:-10,
        width:320,
        height: 40,
        marginBottom: 10
    },
    sut1:{
        color : 'black',
        fontWeight : '500' ,
        fontSize : 23,
        // fontFamily : 'Marker Felt Thin'
    },
    subt:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})


export default SignUp