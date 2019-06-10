import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import FeaturedPostData from '../presentation/FeaturedPostData';

import feedData from "../../data/feedData";

export default class FeaturedPost extends Component {
    state = {
        feedData
    }

    render() {
        return (
            <View>
                <ScrollView horizontal={true}>
                {
                    feedData.map(post => (
                        <FeaturedPostData title={post.title} key={post.id} image={post.image} description={post.description} instructions={post.instructions} />
                    ))
                }
                </ScrollView>
            </View>
        )
    }
}
