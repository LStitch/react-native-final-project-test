import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {Image} from 'react-native'
import Constants from 'expo-constants';

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://c.tenor.com/JlqocrEEmlMAAAAC/darius-league-of-legends.gif'}}
                style={{width: 400, height: 620}}/>
            <Text></Text>
            <Text style={{fontSize: 20, fontWeight: 'bold', textAlign:'center', color:'white'}}>Welcome to LoL Learning App</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Constants.statusBarHeight,
    },
});
  