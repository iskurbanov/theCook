import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from './components/NavBar';
import Login from './components/Login';
import DetailedView from './components/presentation/DetailedView';
import SplashScreen from './components/SplashScreen';
import { createAppContainer } from 'react-navigation';
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
// });
const MainStack = FluidNavigator({
    main: { 
        screen: NavBar 
    },
    details: {
        screen: DetailedView
    },
    splash: {
        screen: SplashScreen
    },
    login: { 
        screen: Login 
    },
    
});

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