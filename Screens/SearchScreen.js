import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';
import SearchPlayer from '../Screens/SearchPlayer';
import Constants from 'expo-constants';

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <SearchPlayer></SearchPlayer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff6666',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: Constants.statusBarHeight,
    },
    wordBold: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
     }
});