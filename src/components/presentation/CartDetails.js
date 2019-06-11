import React, { Component } from 'react'
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import ImageOverlay from "react-native-image-overlay";
import { Transition } from 'react-navigation-fluid-transitions';





class CartDetails extends Component {
    render() {

        let { navigation } = this.props;
        let title = navigation.getParam('title')
        let image = navigation.getParam('image')
        let description = navigation.getParam('description')
        let instructions = navigation.getParam('instructions')

        return ( 
            <View style={{ height: 100 + "%" }}>
                <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                                this.props.navigation.goBack();
                            }}
                            style={{ zIndex: 1, position: "absolute", top: 65, left: 30, width: 70, height: 70 }}
                        >
                    <View>
                        <Icon name='ios-arrow-back' color="black" size={35} />
                    </View>
                </TouchableOpacity>
                <ScrollView contentContainerStyle={{ paddingTop: 100, alignItems: 'center' }}>
                <Transition appear="top">
                    <ImageOverlay 
                    source={image} 
                    containerStyle={styles.cartImages}
                    overlayAlpha={0.2}>
                    <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 25, color: "white" }}>
                        {title}
                    </Text>
                    </ImageOverlay>
                    </Transition>
                    <Transition appear="bottom">
                    <View style={{ alignItems: 'center', marginBottom: 50 }}>
                        <Text style={{ fontSize: 30, marginTop: 20 }} >
                            {title}
                        </Text>
                        <Text style={{ fontSize: 15, margin: 20 }}>
                            {description}
                        </Text>
                        <Text style={{ alignSelf: "flex-start", fontSize: 25, margin: 20 }}>
                            Instructions:
                        </Text>
                        <Text style={{ fontSize: 15, margin: 20 }}>
                            {instructions}
                        </Text>
                    </View>
                    </Transition>
                </ScrollView>
            </View>
        )
    }
}

export default withNavigation(CartDetails);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tempNav: {
        width: 100 +"%",
        backgroundColor: "rgb(250, 250, 250)",
        borderBottomColor: 'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: 'center',
        paddingTop: 35,
        zIndex: 1, 
        position: "absolute", 
        top: 0, 
        left: 0, 
        right: 0, 
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
    cartImages: { 
        width: 375, 
        height: 120, 
        margin: 10 
    }
  });
  