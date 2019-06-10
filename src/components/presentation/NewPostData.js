import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import ImageOverlay from "react-native-image-overlay";
import { withNavigation } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';




class NewPostData extends Component {

    gotoDetails() {
        this.props.navigation.navigate('details', 
            {
                title: this.props.title, 
                image: this.props.image, 
                description: this.props.description,
                instructions: this.props.instructions
            });
    }

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
                                                this.gotoDetails();
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

export default withNavigation(NewPostData);

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
        marginLeft: 60
    }
})
