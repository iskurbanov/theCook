import React from 'react';
import { StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import CartScreen from './CartScreen';
import DiscoverScreen from './DiscoverScreen';



export default createMaterialBottomTabNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions:{
      activeTintColor: "rgb(255,36,86)",
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-home' color={tintColor} size={24} />
      )
    }
   },
  Discover: { 
    screen: DiscoverScreen, 
    navigationOptions:{
      activeTintColor: "rgb(255,36,86)",
      tabBarLabel: 'Discover',
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-compass' color={tintColor} size={24} />
      )
    }
  },
  Cart: { 
    screen: CartScreen, 
    navigationOptions:{
      activeTintColor: "rgb(255,36,86)",
      tabBarLabel: 'Cart',
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-cart' color={tintColor} size={24} />
      )
    }
  },
  Settings: { 
    screen: SettingsScreen, 
    navigationOptions:{
      activeTintColor: "rgb(255,36,86)",
      tabBarLabel: 'Settings',
      tabBarIcon: ({tintColor}) => (
        <Icon name='ios-settings' color={tintColor} size={24} />
      )
    }
  }
},{
  initialRouteName: 'Home',
  activeTintColor: 'white',
  shifting: true
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
