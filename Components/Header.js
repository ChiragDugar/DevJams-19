import React, { Component } from 'react'
import { View, Text,ImageBackground, Image, TextInput } from 'react-native'
import logo from '../public/logo.png'

class Header extends Component{
    render(){
        return(
            <View style={{ height: 100, backgroundColor: 'white', display:'flex', flexDirection: 'row' }} >
                <Image 
                    source = { logo }
                    style = {{ width: 103, height: 103, left: -30 }}
                />

                <TextInput 
                    style={{ height: 50, borderColor: 'white', borderWidth: 1, width: '60%', backgroundColor: '#99d3dd', marginTop: 37, borderRadius: 10, left: -20, color: 'white'}}                     
                    placeholder = "Search"
                    placeholderTextColor = "black"
                />
            </View>
        )
    }
}

export default Header