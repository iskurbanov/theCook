import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'

export default class FeaturedPost extends Component {
    render() {
        return (
            <View>
                <Text style={{ marginLeft: 10, fontSize: 24 }}>
                    Featured Meals
                </Text>
                <ScrollView horizontal={true}>
                <Image 
        style={{ width: 300, height: 200, marginRight: 20 }}
        source={{
                    uri: "https://www.acleanplate.com/wp-content/uploads/2012/05/Savory-Baked-Salmon-Recipe-1.jpg"
                    }}
                    />
                    <Image 
        style={{ width: 300, height: 200, marginRight: 20 }}
        source={{
                    uri: "https://www.acleanplate.com/wp-content/uploads/2012/05/Savory-Baked-Salmon-Recipe-1.jpg"
                    }}
                    />
                    <Image 
        style={{ width: 300, height: 200, marginRight: 20 }}
        source={{
                    uri: "https://www.acleanplate.com/wp-content/uploads/2012/05/Savory-Baked-Salmon-Recipe-1.jpg"
                    }}
                    />
                </ScrollView>
            </View>
        )
    }
}
