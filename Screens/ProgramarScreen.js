import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ProgramarScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button 
                title="Basico" 
                onPress={()=>navigation.navigate('Basico')}
                color='red'
            />
            <Button 
                title="Intermedio" 
                onPress={()=>navigation.navigate('Intermedio')}
                color='red'
                
            />
            <Button 
                title="Avanzado" 
                onPress={()=>navigation.navigate('Avanzado')}
                color='red'
                
            />
        </View>
    )
}

export default ProgramarScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#660000',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});