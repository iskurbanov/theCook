import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class SettingsScreen extends React.Component {

  LogOut() {
    // Redirect to Login screen
    this.props.navigation.navigate('splash');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
        onPress={()=> {
                        this.LogOut()
                    }}  
        >
          <Text>
            LogOut
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  