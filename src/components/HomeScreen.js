import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    Dimensions,
    ScrollView,
    TouchableOpacity
    } from 'react-native';
import { PostFeed } from '../components/container';
import FeaturedPost from '../components/presentation/FeaturedPost';
import NewPosts from '../components/presentation/NewPosts';
import Icon from 'react-native-vector-icons/Ionicons';
import config from "../config/index";


export default class HomeScreen extends React.Component {

state = {
    screenWidth: Dimensions.get('window').width,
    isTrending: true,
}

  render() {

    let { navigation } = this.props;
    let name = navigation.getParam('name')

    return (
        
      <View style={styles.container}> 
        <View style={styles.tempNav}>
            <Text style={{ fontFamily: "HelveticaNeue-Italic", fontSize: 16 }}>
                theCook
            </Text>
        </View>
        <ScrollView>
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
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 20, marginLeft: 100 }}>
                        <Icon name='ios-pin' color="black" size={24} />
                        <Text style={{ marginLeft: 5, fontSize: 15, color: "grey", fontFamily: "Helvetica-Bold"}}>
                            Toronto
                        </Text>
                    </View>
                </View>
                {(this.state.isTrending) ? <FeaturedPost /> : <NewPosts />}
            <PostFeed />
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
        height: 75,
        backgroundColor: "rgb(250, 250, 250)",
        borderBottomColor: 'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: "center",
        alignItems: 'center',
        paddingTop: 35,
    },
  });
  
  