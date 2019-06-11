import React, { Component } from 'react'
import { Text, ScrollView, Image } from 'react-native'
import NewPostData from '../presentation/NewPostData';
import { View } from 'react-native-animatable';



import feedDataNew from "../../data/feedDataNew";



export default class NewPosts extends Component {
    render() {
        return (
            <View animation="fadeInRight" useNativeDriver={true} >
                <ScrollView horizontal={true}>
                {
                    feedDataNew.map(post => (
                        <NewPostData title={post.title} key={post.id} image={post.image} description={post.description} instructions={post.instructions} />
                    ))
                }
                </ScrollView>
            </View>
        )
    }
}
