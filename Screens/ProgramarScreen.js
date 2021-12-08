import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ProgramarScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Button 
                title="TOP" 
                onPress={()=>navigation.navigate('ReactScreen')}
                color='red'
            />
            <Button 
                title="ADC" 
                onPress={()=>navigation.navigate('JavascriptScreen')}
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