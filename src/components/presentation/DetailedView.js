import React, { Component } from 'react'
import { Text , ScrollView , ActivityIndicator, TouchableOpacity } from 'react-native'
import { Transition } from 'react-navigation-fluid-transitions';
import Icon from 'react-native-vector-icons/Ionicons';
import { withNavigation } from 'react-navigation';
import { View, Image } from 'react-native-animatable';





class DetailedView extends Component {
    render() {

        let { navigation } = this.props;
        let title = navigation.getParam('title')
        let image = navigation.getParam('image')
        let description = navigation.getParam('description')
        let instructions = navigation.getParam('instructions')

        return ( 
            <View animation="bounceInUp" delay={500}  style={{ height: 100 + "%" }}>
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
                <ScrollView>
                <Transition shared={image} >
                    <Image 
                        PlaceholderContent={<ActivityIndicator />}
                        style={{ width: 100 + "%"}}
                        source={ image }
                    />
                    </Transition>
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
                </ScrollView>
            </View>
        )
    }
}

export default withNavigation(DetailedView);