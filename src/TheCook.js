import React from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import NavBar from './components/NavBar';
import Login from './components/Login';
import DetailedView from './components/presentation/DetailedView';
import SplashScreen from './components/SplashScreen';
import SettingsScreen from './components/SettingsScreen';
import CartDetails from './components/presentation/CartDetails';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';



// const MainStack = createSwitchNavigator({
//     splash: {
//         screen: SplashScreen
//     },
//     login: { 
//         screen: Login 
//     },
//     main: { 
//         screen: NavBar 
//     },
//     details: {
//         screen: DetailedView
//     },
//     cartDetails: {
//         screen: CartDetails
//     },
//     settings: {
//         screen: SettingsScreen
//     },
// });
const MainStack = FluidNavigator({
    splash: {
        screen: SplashScreen
    },
    login: { 
        screen: Login 
    },
    main: { 
        screen: NavBar 
    },
    details: {
        screen: DetailedView
    },
    cartDetails: {
        screen: CartDetails
    },
    settings: {
        screen: SettingsScreen
    },
    
},
{transitionConfig});

const transitionConfig = {
    duration: 2000,
    timing: Animated.timing,
    easing: Easing.easing
  };
  

const AppContainer = createAppContainer(MainStack); 
 
export default class TheCook extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <AppContainer />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });