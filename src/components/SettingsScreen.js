
import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Animated
    } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import LottieView from 'lottie-react-native';



HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 75
export default class SettingsScreen extends React.Component {

    state = {
        screenWidth: Dimensions.get('window').width,
        scrollY: new Animated.Value(0),
    }

    LogOut() {
        // Redirect to Login screen
        this.props.navigation.navigate('splash');
    }

  

    render() {

    const headerHeight = this.state.scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
    })

    let { navigation } = this.props;
    let name = navigation.getParam('name')

    return (
      <View style={styles.container}>
        <Animated.View style={[ styles.tempNav, {height: headerHeight} ]}>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontFamily: "Helvetica", fontSize: 20, color: "rgb(255,36,86)" }}>
                    the
                </Text>
                <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 20, color: "rgb(255,36,86)" }}>
                    Cook.
                </Text>
            </View>
        </Animated.View>
        <View style={{ flexDirection: "row",justifyContent: "center", position: "absolute", top: 200}}>
            <Text style={{ fontFamily: "Helvetica", fontSize: 40, color: "rgb(255,36,86)" }}>
                log
            </Text>
            <Text style={{ fontFamily: "Helvetica-Bold", fontSize: 40, color: "rgb(255,36,86)" }}>
                Out.
            </Text>
        </View>
        <TouchableOpacity
        style={{ flex: 1, marginTop: 150, width: 80 + "%" }}
        onPress={()=> {
                        this.LogOut()
                    }}>
                        <View
                        style={{ 
                            // height: 100 + "%",
                            width: 100 + "%", 
                            flex: 1,
                            }}>
                            <LottieView source={require('../../assets/logos/print.json')} autoPlay loop={false} />
                        </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
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
  });