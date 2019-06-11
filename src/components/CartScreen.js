import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    Dimensions,
    ScrollView,
    FlatList,
    Animated,
    TouchableOpacity
    } from 'react-native';
import CartData from '../data/CartData';
import { withNavigation } from 'react-navigation';
import ImageOverlay from "react-native-image-overlay";
import { Transition } from 'react-navigation-fluid-transitions';




HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 75

class CartScreen extends React.Component {

state = {
    screenWidth: Dimensions.get('window').width,
    isTrending: true,
    scrollY: new Animated.Value(0),
}

renderItem = ({ item, index }) => {
    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate("cartDetails", {
                        title: item.title, 
                        image: item.image, 
                        description: item.description,
                        instructions: item.instructions
                    }) }} >
            <ImageOverlay 
                source={item.image} 
                containerStyle={styles.cartImages}
                overlayAlpha={0.2}>
                <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 25, color: "white" }}>
                    {item.title}
                </Text>
            </ImageOverlay>
            </TouchableOpacity>
        </View>
    )
}

  render() {

    const headerHeight = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
    })


    return (
        
      <View style={styles.container}> 
         <Animated.View style={[ styles.tempNav, { height: headerHeight } ]}>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontFamily: "Helvetica", fontSize: 20, color: "rgb(255,36,86)" }}>
                    the
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 20, color: "rgb(255,36,86)" }}>
                    Cook.
                </Text>
            </View>
        </Animated.View>
        
        <ScrollView>
            <View style={{ paddingTop: 150 }}>
                <FlatList
                    data={CartData}
                    style={styles.container}
                    renderItem={this.renderItem}
                    contentContainerStyle={{ margin: 10 }}
                    keyExtractor={item => item.id}
                />
            </View>
            <View style={{ alignItems: "center", marginTop: 50 }}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                    this.props.navigation.navigate("settings");
                }}>
                <View
                    style={styles.button}>
                    <Text style={{ color: "white", fontSize: 25, fontFamily: "Helvetica-Bold" }}>
                        Checkout
                    </Text>
                </View>
            </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(CartScreen);

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
  
  