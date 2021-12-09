import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Image} from 'react-native';
import SearchPlayer from '../Screens/SearchPlayer';

export default function SearchScreen() {
    return (
        <View style={styles.container}>
            <SearchPlayer/>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/25/25231.png'}}
                style={{width: 100, height: 100}}/>
            <Text style = {styles.wordBold}>@LStitch</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff6666',
      alignItems: 'center',
      justifyContent: 'center'
    },
    wordBold: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
     }
});