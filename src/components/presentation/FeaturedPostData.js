import React, { Component } from 'react'
import { Text, View, ScrollView, Button } from 'react-native'
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
                                    <Button style={{ width: 50, height: 20, backgroundColor: "red" }} title="View" onPress={() => {
                                            
                                        }} />
                                </View>
                            </ImageOverlay>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
