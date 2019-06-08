import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ImageOverlay from "react-native-image-overlay";


export default class FeaturedPost extends Component {
    render() {
        return (
            <View>
                <View style={{ marginBottom: 20 }}>
                    <ScrollView horizontal={true}>
                        <View>
                            <ImageOverlay 
                                containerStyle={{ width: 300, height: 180, marginRight: 20, marginLeft: 20, borderRadius: 7 }}
                                height={200}
                                overlayAlpha={0.1}
                                rounded={7}
                                source={{
                                uri: "https://www.acleanplate.com/wp-content/uploads/2012/08/Avocado-Radish-Salad-Recipe-1-500x500.jpg"
                                }}
                            />
                            <Text style={{ position: "absolute", top: 70, left: 65, fontFamily: "Helvetica-Bold", fontSize: 22, color: "rgba(255,36,86,0.80)" }}>
                                Avocado Radish Salad
                            </Text>
                            <Text style={{ position: "absolute", top: 100, left: 120, fontFamily: "Helvetica-Bold", fontSize: 20, color: "white" }}>
                                    Light Meals
                            </Text>
                        </View>
                        <View>
                            <ImageOverlay 
                                containerStyle={{ width: 300, height: 180, marginRight: 20, borderRadius: 7 }}
                                height={200}
                                overlayAlpha={0.1}
                                rounded={7}
                                source={{
                                uri: "https://www.acleanplate.com/wp-content/uploads/2012/08/Asparagus-and-Mushroom-Saute-Recipe.jpg"
                                }}
                            />
                            <Text style={{ position: "absolute", top: 70, left: 65, fontFamily: "Helvetica-Bold", fontSize: 22, color: "rgba(255,36,86,0.80)" }}>
                                Avocado Radish Salad
                            </Text>
                            <Text style={{ position: "absolute", top: 100, left: 120, fontFamily: "Helvetica-Bold", fontSize: 20, color: "white" }}>
                                    Light Meals
                            </Text>
                        </View>
                        <View>
                            <ImageOverlay 
                                containerStyle={{ width: 300, height: 180, marginRight: 20, borderRadius: 7 }}
                                height={200}
                                overlayAlpha={0.05}
                                rounded={7}
                                source={{
                                uri: "https://www.acleanplate.com/wp-content/uploads/2012/06/Greek-Salad-Recipe-1.jpg"
                                }}
                            />
                            <Text style={{ position: "absolute", top: 70, left: 65, fontFamily: "Helvetica-Bold", fontSize: 22, color: "rgba(255,36,86,0.80)" }}>
                                Avocado Radish Salad
                            </Text>
                            <Text style={{ position: "absolute", top: 100, left: 120, fontFamily: "Helvetica-Bold", fontSize: 20, color: "white" }}>
                                    Light Meals
                            </Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
