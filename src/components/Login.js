import React, { Component } from 'react';
import { StyleSheet, 
    View, 
    Text, 
    TextInput, 
    Image, 
    TouchableOpacity, 
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    Platform
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import config from "../config/index";
import { Row } from 'native-base';

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);



export default class Login extends Component {

    state = {
        screenWidth: Dimensions.get('window').width,
        credentials: {
            login: "",
            email: "",
        },
    }

    updateText(text, field) {
        let newCredentials = Object.assign(this.state.credentials);
        newCredentials[field] = text;
        this.setState({
            credentials: newCredentials
        });
    }

    goBack() {
        this.props.navigation.navigate('splash');
    }


    login() {
        //Send name and email to server
        this.props.navigation.navigate('main');
        fetch(config.baseUrl, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: this.state.credentials.name,
                email: this.state.credentials.email
            })

        })
    }

    render() {
        
        return (
            <KeyboardAwareScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                extraScrollHeight={220}
                keyboardOpeningTime={10}
            >
            <DismissKeyboard>
            <View
                style={{
                    height: 100 + "%",
                    width: 100 + "%",
                    alignItems: "center",
                    flex: 1,
                }} >
                <View style={styles.topBackground}></View>
                <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                this.goBack()
                            }}
                            style={{ position: "absolute", top: 70, left: 30, width: 70, height: 70 }}
                        >
                    <View>
                        <Icon name='ios-arrow-back' color="black" size={35} />
                    </View>
                </TouchableOpacity>
                <Image source={ config.images.avocado } style={{ position: "absolute", top: 60, right: -80, width: 300, height: 220 }} />
                <View style={{ alignItems: "center", }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", position: "relative", top: -130, width: 300, marginRight: 20  }}>
                        <Text style={styles.signupTitle}>
                            Signup
                        </Text>
                        <Text style={[styles.loginTitle]}>
                            Login
                        </Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <View style={ styles.loginBox }>
                            <View>
                            <TextInput
                                autoCorrect={false}
                                placeholder="Name"
                                style={styles.input}
                                onChangeText={text => this.updateText(text, 'name')}
                            />
                            </View>
                            <View>
                            <TextInput
                                keyboardType="email-address"
                                autoCorrect={false}
                                placeholder="E-mail"
                                style={styles.input}
                                onChangeText={text => this.updateText(text, 'email')}
                            />
                            </View>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                this.login()
                            }}
                        >
                            <View
                                style={styles.button}>
                                <Text style={{ color: "white", fontSize: 25, fontFamily: "Helvetica-Bold" }}>
                                    Lets go!
                                    </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </DismissKeyboard>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: 320,
        backgroundColor: "white",
        margin: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#E1E1E1',
        borderRadius: 30,
        paddingLeft: 20

    },
    loginBox: {
        backgroundColor: '#FAFAFA',
        borderRadius: 5,
        width: 90 + "%", 
        height: 190, 
        justifyContent: "center",
        alignItems: "center",
        position: "relative", 
        top: -120,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.40,
        shadowRadius: 15,
        elevation: 10,
    },
    button: {
        width: 250,
        height: 60,
        backgroundColor: "rgb(255,36,86)",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.40,
        shadowRadius: 15,

        elevation: 10,

    },
    loginTitle: { 
        color: "rgba(255,255,255,0.50)", 
        fontSize: 30,
        fontFamily: "Helvetica-Bold", 
        alignSelf: "flex-start",
        paddingLeft: 20
    },
    signupTitle: { 
        color: "white", 
        fontSize: 30,
        fontFamily: "Helvetica-Bold", 
        alignSelf: "flex-start",
        paddingLeft: 20
    },
    topBackground: { 
        width: 100 + "%", 
        height: 400, 
        zIndex: 0,
        backgroundColor: "rgb(255,36,86)", 
        borderBottomStartRadius: 100, 
        borderBottomEndRadius: 100, 
        transform: [{scaleX: 1.5}] 
    }
        
})