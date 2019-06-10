import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Dimensions,
    ScrollView,
    TouchableOpacity,
    Animated,
    } from 'react-native';
import { PostFeed } from '../components/container';
import FeaturedPost from '../components/presentation/FeaturedPost';
import NewPosts from '../components/presentation/NewPosts';
import Icon from 'react-native-vector-icons/Ionicons';



HEADER_MAX_HEIGHT = 120
HEADER_MIN_HEIGHT = 75

class HomeScreen extends React.Component {

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
        <ScrollView style={{ flex: 1, paddingTop: 100 }} 
                    scrollEventThrottle={16}
                    onScroll = {Animated.event(
                        [{ nativeEvent: {contentOffset: {y: this.state.scrollY}}}]
                    )}>
            <Text style={{ fontSize: 35, paddingBottom: 30, paddingTop: 30, alignSelf: 'center' }}>
                Welcome, {name}!
            </Text>
            <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
                    <TouchableOpacity
                      onPress={() => {
                                this.setState({ isTrending: true })
                            }}>
                      <Text style={[ this.state.isTrending? {color:"rgb(255,36,86)"}: {color:"rgba(0,0,0,0.20)"} ,{ marginLeft: 20, fontSize: 20, fontFamily: "Helvetica-Bold", marginBottom: 20 }]}>
                          Trending
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                                this.setState({ isTrending: false })
                            }}>
                        <Text style={[ this.state.isTrending ? {color:"rgba(0,0,0,0.20)"}:{color:"rgb(255,36,86)"} ,{ marginLeft: 20, fontSize: 20, fontFamily: "Helvetica-Bold", marginBottom: 20 }]}> 
                         New
                      </Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 20, marginLeft: 150 }}>
                        <Icon name='ios-pin' color="black" size={24} />
                        <Text style={{ marginLeft: 5, fontSize: 15, color: "grey", fontFamily: "Helvetica-Bold"}}>
                            Toronto
                        </Text>
                    </View>
                </View>
                {(this.state.isTrending) ? <NewPosts navigation={this.props.navigation} /> : <FeaturedPost navigation={this.props.navigation}/> }
              <PostFeed />
        </ScrollView>
      </View>
    );
  }
}
  
export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
  
  