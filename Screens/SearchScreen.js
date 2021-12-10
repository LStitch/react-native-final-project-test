import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';
import SearchPlayer from '../Screens/SearchPlayer';
import Constants from 'expo-constants';

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://pa1.narvii.com/7362/f510f2633c064a266b1fee82b215b4e220b1d5d1r1-480-270_hq.gif'}}
                style={{width: 400, height: 300, alignSelf: 'center'}}/>
            <SearchPlayer></SearchPlayer>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
});