import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function MidLaners() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Aquí residen los Mid Laners</Text>
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