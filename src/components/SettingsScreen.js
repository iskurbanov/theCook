
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

HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 75
export default class SettingsScreen extends React.Component {

    state = {
        screenWidth: Dimensions.get('window').width,
        isTrending: true,
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
      
        <TouchableOpacity
        style={{ marginTop: 200 }}
        onPress={()=> {
                        this.LogOut()
                    }}  
        >
          <Text>
            LogOut
          </Text>
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