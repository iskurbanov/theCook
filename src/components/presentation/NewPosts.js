import React, { Component } from 'react'
import { Text, View, ScrollView, Image } from 'react-native'
import NewPostData from '../presentation/NewPostData';


import feedDataNew from "../../data/feedDataNew";



export default class NewPosts extends Component {
    render() {
        return (
            <View>
                <ScrollView horizontal={true}>
                {
                    feedDataNew.map(post => (
                        <NewPostData title={post.title} key={post.id} image={post.image} />
                    ))
                }
                </ScrollView>
            </View>
        )
    }
}
