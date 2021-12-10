import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF'}}>Acerca de...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#990066',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: Constants.statusBarHeight,
    },
});
  
