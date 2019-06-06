import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    Dimensions,
    ScrollView
    } from 'react-native';
import { PostFeed } from '../components/container';
import FeaturedPost from '../components/presentation/FeaturedPost';

export default class HomeScreen extends React.Component {

state = {
    screenWidth: Dimensions.get('window').width,
}

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.tempNav}>
            <Text>
                theCook
            </Text>
        </View>
        <ScrollView>
            <Text style={{ fontSize: 35, paddingBottom: 50, paddingTop: 30, alignSelf: 'center' }}>
              Welcome, Christina!
            </Text>
            <FeaturedPost />
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
    }
  });
  
  