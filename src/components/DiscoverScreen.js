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
import DiscoverFeed from './container/DiscoverFeed';
import { PostFeed } from '../components/container';
import FeaturedPost from '../components/presentation/FeaturedPost';
import NewPosts from '../components/presentation/NewPosts';
import Icon from 'react-native-vector-icons/Ionicons';



HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 75

export default class DiscoverScreen extends React.Component {

state = {
    screenWidth: Dimensions.get('window').width,
    isTrending: true,
    scrollY: new Animated.Value(0),
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
            
        <ScrollView style={{ flex: 1, paddingTop: 150 }} 
                    scrollEventThrottle={16}
                    onScroll = {Animated.event(
                        [{ nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                    )}>
              <DiscoverFeed />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tempNav: {
        width: 100 +"%",
        // height: 75,
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
  
  