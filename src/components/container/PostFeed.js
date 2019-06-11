import React from 'react';
import { FlatList } from 'react-native';
import Post from '../presentation/Post';
import FeaturedPost from '../presentation/FeaturedPost';
import feedData from "../../data/feedData";
import { View } from 'react-native-animatable';



export default class PostFeed extends React.Component {

    __renderPost({ item }) {
        return (
        <View animation="fadeInUp" useNativeDriver={true}>
            <Post name={item.name} image={item.image} description={item.description} avatar={item.avatar} />
        </View>
        )
    }

    __returnKey(item) {
        return item.toString();
    }

    render() {
        return (
            <FlatList
                data={feedData}
                keyExtractor={ item => item.id }
                renderItem={this.__renderPost}
            />
        )
    }
}