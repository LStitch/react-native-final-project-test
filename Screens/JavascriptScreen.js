import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Image} from 'react-native'

export default function JavascriptScreen() {
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://3con14.biz/js/_data/_config/js.png'}}
                style={{width: 300, height: 350}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  