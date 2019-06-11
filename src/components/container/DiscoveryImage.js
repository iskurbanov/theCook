import React from 'react';
import { View, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Post from '../presentation/Post';
import DiscoverData from '../../data/DiscoveryData';
import { withNavigation } from 'react-navigation';
import { Transition } from 'react-navigation-fluid-transitions';




class DiscoveryImage extends React.Component {
    render() {
        const { image } = this.props
    return (
            <View>
            <TouchableOpacity
                style={ styles.button }
                onPress={() => {
                        this.props.navigation.navigate('details', 
                        {
                            title: this.props.title, 
                            image: this.props.image, 
                            description: this.props.description,
                            instructions: this.props.instructions
                        });
                    }}>
                    <Transition shared={image}>
               <Image source={image} style={{ width: 135, height: 135, margin: 2 }} />
               </Transition>
            </TouchableOpacity>
           </View>
    )
    }
}

export default withNavigation(DiscoveryImage);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
