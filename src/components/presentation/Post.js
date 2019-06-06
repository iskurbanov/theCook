import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    ActivityIndicator, 
    Dimensions, 
    TouchableOpacity } from 'react-native';
import config from '../../config/index';
import { Image } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';


export default class Post extends React.Component {

state = {
    screenWidth: Dimensions.get('window').width,
    liked: false
}

likeToggled(){
    this.setState({
        liked: !this.state.liked
    })
}

  render() {

    const heartIconColor = (this.state.liked) ? "rgb(252,61,57)" : null;

    return (
      <View style={styles.container}>
        <View style={styles.userBar}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image 
                    style={styles.userPic}
                    source={{ uri: "https://www.acleanplate.com/wp-content/uploads/2018/01/Christina-Feindel-2018.jpg" 
                    }} />
                <View>
                    <Text>
                        Christina
                    </Text>
                </View>
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 30 }}>
                    ...
                </Text>
            </View>
        </View>
        <TouchableOpacity 
            activeOpacity={0.8}
            onPress={()=>{
                this.likeToggled()
        }}>
        <Image 
        PlaceholderContent={<ActivityIndicator />}
        style={{ width: this.state.screenWidth, height: 300 }}
        source={{
                    uri: "https://www.acleanplate.com/wp-content/uploads/2012/05/Savory-Baked-Salmon-Recipe-1.jpg"
                    }}
                    />
        </TouchableOpacity>
        <View style={ styles.iconBar }>
            {/* <Image style={[ styles.icon, { height: 40, width: 40, tintColor: heartIconColor } ]} source={ config.images.heartIcon } />
            <Image style={[ styles.icon, { height: 36, width: 36 } ]} source={ config.images.bubbleIcon } /> */}
            {/* <Image style={[ styles.icon, { height: 40, width: 40 } ]} source={ config.images.arrowIcon } /> */}
            <Icon name='ios-heart' color="black" size={35} style={[ styles.icon, { color: heartIconColor } ]}/>
            <Icon name='ios-add' color="black" size={40} style={ styles.icon } />
        </View>
        {/* <View style={ styles.iconBar }>
            <Image style={[ styles.icon, { height: 30, width: 30 } ]} source={ config.images.heartIcon } />
            <Text>
                128 likes
            </Text>
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100 + "%",
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
    userBar: {
        width: 100 + "%",
        height: config.styleConstants.rowHeight,
        backgroundColor: 'rgb(255, 255, 255)',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    userPic: {
        width: 40, 
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    iconBar: {
        height: config.styleConstants.rowHeight,
        width: 100 + "%",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgb(233,233,233)',
        flexDirection: "row",
        alignItems: "center"

    },
    icon: {
        marginLeft: 10,
    },
  });
  
  