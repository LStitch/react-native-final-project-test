import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Intermedio = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text></Text>
            </ScrollView>
        </View>
    )
}

export default Intermedio

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10
    },

    wallpapers: {
        width: 200,
        height: 200,
        margin: 15,
        alignSelf: 'center'
    },

    texto: {
        fontSize: 18,
        textAlign: 'justify'
    },

    negritas: {
        fontSize: 18,
        textAlign: 'justify',
        fontWeight: 'bold'
    },
    
    titulo: {
        fontSize: 25,
        textAlign: 'center'
    }
});
  
  
