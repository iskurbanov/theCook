import React from 'react';
import { View, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Post from '../presentation/Post';
import DiscoverData from '../../data/DiscoveryData';
import { withNavigation } from 'react-navigation';
import DiscoveryImage from './DiscoveryImage';



// function DiscoveryImage(item) {
//     return (
//             <View>
//            <TouchableOpacity
//                 style={ styles.button }
//                 onPress={() => {
//                         this.props.navigation.navigate('details', 
//                         {
//                             title: this.props.title, 
//                             image: this.props.image, 
//                             description: this.props.description,
//                             instructions: this.props.instructions
//                         });
//                     }}>
//                <Image source={item.image} style={{ width: 135, height: 135, margin: 2 }} />
//             </TouchableOpacity>
//            </View>
//     )
//   }



class DiscoverFeed extends React.Component {

    gotoDetails() {
        this.props.navigation.navigate('details', 
            {
                title: this.props.title, 
                image: this.props.image, 
                description: this.props.description,
                instructions: this.props.instructions
            });
    }

   renderItem = ({ item, index }) => {
       return (
        
           <DiscoveryImage image={item.image} title={item.title} key={item.id} description={item.description} instructions={item.instructions}/>
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

export default withNavigation(DiscoverFeed, DiscoveryImage);


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
