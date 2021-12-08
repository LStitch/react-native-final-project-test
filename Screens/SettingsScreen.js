import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: '#FFFFFF'}}>Configuración</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  
