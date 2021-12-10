import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Image} from 'react-native'

export default function Basico() {
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://i2.wp.com/www.gamerfocus.co/wp-content/uploads/2021/11/Powder-1.jpg?ssl=1'}}
            style={{width: 300, height: 350}}></Image>
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
  