import React, { Component } from 'react'
import { View, Text,ImageBackground, Image, TextInput } from 'react-native'
import Sticky_Footer from './Sticky_Footer'

class StickyCall extends Component{
    static navigationOptions = () => ({
        header:null
    })
    render(){
        return(
          <Sticky_Footer />  
        )
    }
}

export default StickyCall