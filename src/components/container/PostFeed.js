import React from 'react';
import { FlatList } from 'react-native';
import Post from '../presentation/Post';
import FeaturedPost from '../presentation/FeaturedPost';

export default class PostFeed extends React.Component {

    __renderPost({ item }) {
        return <Post />
    }

    __returnKey(item) {
        return item.toString();
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
                keyExtractor={this.__returnKey}
                renderItem={this.__renderPost}
            />
        )
    }
}