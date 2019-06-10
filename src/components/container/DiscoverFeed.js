import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import Post from '../presentation/Post';
import DiscoverData from '../../data/DiscoveryData';






export default class DiscoverFeed extends React.Component {

   renderItem = ({ item, index }) => {
       return (
           <View>
               <Image source={item.image} style={{ width: 135, height: 135 }} />
           </View>
       )
   }

    render() {
        return (
            <FlatList
                data={DiscoverData}
                style={styles.container}
                renderItem={this.renderItem}
                numColumns={3}
                contentContainerStyle={{justifyContent:"center", alignItems: "center"}}
                keyExtractor={item => item.id}
                />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

 // state = {
    //     loading: false,
    //     data: [],
    //     page: 1,
    //     seed: 1,
    //     error: null,
    //     refreshing: false
    // }

    // componentDidMount() {
    //     this.makeRemoteRequest();
    // }

    // makeRemoteRequest = () => {
    //     const { page, seed } = this.state;
    //     const url = 
    // }