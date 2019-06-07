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
                                containerStyle={{ width: 330, height: 200, marginRight: 20, marginLeft: 20, borderRadius: 7 }}
                                height={200}
                                overlayAlpha={0.1}
                                rounded={7}
                                source={{
                                uri: "https://www.acleanplate.com/wp-content/uploads/2011/07/Taco-Salad-with-Mexican-Cauliflower-Rice-Recipe-1.jpg"
                                }}
                            />
                            <Text style={{ position: "absolute", top: 70, left: 65, fontFamily: "Helvetica-Bold", fontSize: 22, color: "rgba(255,36,86,0.80)" }}>
                                Taco Salad Cauliflower
                            </Text>
                            <Text style={{ position: "absolute", top: 100, left: 120, fontFamily: "Helvetica-Bold", fontSize: 20, color: "white" }}>
                                Light Meals
                            </Text>
                        </View>
                        <View>
                            <ImageOverlay 
                                containerStyle={{ width: 330, height: 200, marginRight: 20, borderRadius: 7 }}
                                height={200}
                                overlayAlpha={0.05}
                                rounded={7}
                                source={{
                                uri: "https://www.acleanplate.com/wp-content/uploads/2017/10/Chicken-Bulgogi-Recipe.jpg"
                                }}
                            />
                            <Text style={{ position: "absolute", top: 70, left: 65, fontFamily: "Helvetica-Bold", fontSize: 22, color: "rgba(255,36,86,0.80)" }}>
                                Korean Chicken Bulgogi
                            </Text>
                            <Text style={{ position: "absolute", top: 100, left: 120, fontFamily: "Helvetica-Bold", fontSize: 20, color: "white" }}>
                                    Light Meals
                            </Text>
                        </View>
                        <View>
                            <ImageOverlay 
                                containerStyle={{ width: 330, height: 200, marginRight: 20, borderRadius: 7 }}
                                height={200}
                                overlayAlpha={0.05}
                                rounded={7}
                                source={{
                                uri: "https://www.acleanplate.com/wp-content/uploads/2017/10/Thai-Tuna-Salad-Recipe.jpg"
                                }}
                            />
                            <Text style={{ position: "absolute", top: 70, left: 65, fontFamily: "Helvetica-Bold", fontSize: 22, color: "rgba(255,36,86,0.80)" }}>
                                Green Thai Tuna Salad
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
