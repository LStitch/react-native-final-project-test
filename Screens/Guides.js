import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import Constants from 'expo-constants';

const Guides = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 20,}}>Guides for all type of player</Text>
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
            <Image source={{uri: 'https://i.pinimg.com/originals/72/5e/fe/725efee99ebef2b70ab5103a0a3513f3.gif'}}
                style={{width: 400, height: 200, alignSelf: 'center'}}/>
        </View>
    )
}

export default Guides

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: Constants.statusBarHeight,
    },
});