import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet,KeyboardAvoidingView, Button, CheckBox, Picker } from 'react-native'
import signup_back from '../public/home_background.png'
import Header from './Header'

class Request extends Component{

    handleRequest = () =>{
        console.log("Innn")
        fetch('http://192.168.43.176:3000/create-thread',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                "threadName": "Q Block",
                "coordinates": [ 79.163610,12.973941],
                "createdBy": "5dacc1fa004ad95d2a1eb6cd",
                "costTocost": true,
                "extraPayment": true,
                "socialService": true
            })
        })
        .then((response)=> response.json())
        .then(msg=>{
            // this.setState({
            //     msg
            // })
            console.log("Helllos")
            console.log("##",msg)
        })
        .catch(err=>{
            console.log(err.message)
        })
    }
    
    render(){
        return(
            <ImageBackground source={ signup_back } style={{width:'100%', height: '100%'}} >

                <Header />
                <KeyboardAvoidingView behavior="padding" style={{ flex:1 }}>

                    <View>
                        <Text style = { styles.phead }>Tell us what you need!</Text>
                    </View>

                    <View style = { styles.pf }>

                        <View>
                            <Text style={ styles.ptext } >Choose one or more</Text>
                            <View style={{ flexDirection: 'column'}}>
                               
                                <View style={{ flexDirection: 'row' }}>
                                    <CheckBox
                                    // value={this.state.checked}
                                    // onValueChange={() => this.setState({ checked: !this.state.checked })}
                                    />
                                    <Text style={ styles.pcht }>Cost for cost</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <CheckBox
                                    // value={this.state.checked}
                                    // onValueChange={() => this.setState({ checked: !this.state.checked })}
                                    />
                                    <Text style={ styles.pcht }>Extra Payment</Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <CheckBox
                                    // value={this.state.checked}
                                    // onValueChange={() => this.setState({ checked: !this.state.checked })}
                                    />
                                    <Text style={ styles.pcht }>Social Service</Text>
                                </View>
                            </View>
                        </View>

                        <View style = { styles.dd }>
                            <Text style={ styles.ptext } >What do you need?</Text>
                            <Picker style = { styles.ppick }>
                                <Picker.Item label = 'Choose the option' value = '' />                            
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                                <Picker.Item label = 'Sanitary Pads' value = 'SP' />
                            </Picker>
                        </View>

                        <View style = {{display: 'flex', justifyContent:'center', alignItems: 'center', margin:20 }} >
                            <View style={ styles.pbut }>
                                <Button
                                    title="  Submit  "
                                    color = "#F0437A"
                                    onPress = { this.handleRequest }
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
   phead : {
    left: 60,
    top:10,
    // padding: 40,
    fontSize: 23,
    color: 'white',
    textDecorationLine : 'underline'
   },
   pbut: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
   pf : {
    padding:15,
    margin:5,
    marginTop : 30,
    paddingLeft : 5
   },
   ptext : {
    color : 'black',
    fontWeight : '500' ,
    fontSize : 23,
   },
   pcht:{
    color : 'white',
    fontSize : 19,
    fontWeight : '300',
    marginLeft : 5
   },
   ppick : {
       borderRadius : 175,
       backgroundColor : 'white',
       color : 'pink',
       fontSize : 23,
       fontWeight : '200',
       marginTop : 5,
       borderWidth : 5,
       borderColor : 'white'
   },
   dd:{
    marginTop : 20
   }
})


export default Request