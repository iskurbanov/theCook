import React from 'react';
import { View, StyleSheet } from 'react-native';
import NavBar from './components/NavBar';
import Login from './components/Login';
import SplashScreen from './components/SplashScreen';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';



const MainStack = createSwitchNavigator({
    splash: {
        screen: SplashScreen
    },
    login: { 
        screen: Login 
    },
    main: { 
        screen: NavBar 
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