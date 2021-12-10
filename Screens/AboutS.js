import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';

export default function AboutScreen(props) {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View>
            <Text style={styles.texto}>{props.nombre2}</Text>
            <Text style={styles.texto}>{props.carrera}</Text>
            <Text style={styles.texto}>{props.semestre}</Text>
            <Text style={styles.texto}>{props.numero}</Text> 

            <Text style={styles.texto}>{props.nombre}</Text>
            <Text style={styles.texto}>{props.carrera}</Text>
            <Text style={styles.texto}>{props.semestre}</Text>
            <Text style={styles.texto}>{props.numero2}</Text>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: Constants.statusBarHeight,
    },
    texto: {
        fontSize: 18,
        textAlign: 'justify',
        color:'white',
    },
});
  