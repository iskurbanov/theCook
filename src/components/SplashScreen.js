import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Keyboard, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import config from "../config/index";




export default class Login extends Component {


    EnterApp() {
        // Redirect to Login screen
        this.props.navigation.navigate('login');
    }

    render() {
        return (
                <View 
                    style={{ 
                        height: 100 + "%",
                        width: 100 + "%", flex: 1,
                        alignItems: "center",
                        marginBottom: 200,
                        justifyContent: "flex-end"
                        }}
                        >
                    <View style={{ flexDirection: "row", position: "absolute", top: 80, left: 100 }}>
                        <Text style={{ fontFamily: "Helvetica", fontSize: 40, color: "rgb(255,36,86)" }}>
                            the
                        </Text>
                        <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 40, color: "rgb(255,36,86)" }}>
                            Cook.
                        </Text>
                    </View>
                    <LottieView source={require('../../assets/animation.json')} autoPlay loop />
                    <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={()=> {
                                    this.EnterApp()
                                }}  
                    >
                    <View
                    style={styles.button}>
                        <Text style={{ color: "white", fontSize: 25, fontFamily: "Helvetica-Bold" }}>
                            Enter
                        </Text>
                    </View>
                    </TouchableOpacity>
                </View>
        )
    }
}

const styles = StyleSheet.create ({
    input: {
        height: 40,
        width: 200,
        backgroundColor: "white",
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    button: {
        width: 250, 
        height: 60, 
        backgroundColor:"rgb(255,36,86)", 
        alignItems:"center", 
        justifyContent:"center",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.40,
        shadowRadius: 15,
        elevation: 10,
    }
})