import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {Image} from 'react-native'

const ReactScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: 'http://assets.stickpng.com/images/584830f5cef1014c0b5e4aa1.png'}}
                style={{width: 300, height: 300}}/>
        </View>
    )
}

export default ReactScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  
