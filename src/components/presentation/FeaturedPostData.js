import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import ImageOverlay from "react-native-image-overlay";


export default class FeaturedPost extends Component {
    render() {

        const { title, image } = this.props 

        return (
            <View>
                <View style={{ marginBottom: 20 }}>
                    <ScrollView horizontal={true}>
                        <View>
                            <ImageOverlay 
                                containerStyle={{ width: 300, height: 180, marginRight: 10, marginLeft: 20, borderRadius: 7 }}
                                contentPosition={"center"}
                                height={200}
                                overlayAlpha={0.1}
                                rounded={7}
                                source={image}>
                                <View>
                                    <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 25, color: "white" }}>
                                        {title}
                                    </Text>
                                    <TouchableOpacity
                                        style={ styles.button }
                                        onPress={() => {

                                            }}>
                                        <Text style={{ fontFamily: "Helvetica-Bold", color: 'white', fontSize: 20 }}> 
                                            View
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </ImageOverlay>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    button: {
        justifyContent: 'center', 
        alignItems: "center", 
        width: 100, 
        height: 50, 
        backgroundColor: "rgba(0,0,0,0.10)", 
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        margin: 10,
        marginLeft: 80
    }
})