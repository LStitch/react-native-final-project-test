import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';
import Stitch from '../Images/Stitch.jpg'

export default function AboutScreen(props) {
    return (
        <View style={styles.container}>
            <ScrollView>
            <View>
            <Text>{"\n"}{"\n"}</Text>
            <Image source={Stitch} style={{width: 150, height: 150}}/>
            <Text style={styles.texto}>{"\n"}{props.nombre2}</Text>
            <Text style={styles.texto}>{"\n"}{props.numero}</Text>
            <Text style={styles.texto}>{"\n"}{props.carrera}</Text>
            <Text style={styles.texto}>{"\n"}{props.semestre}</Text>
            <Text>{"\n"}{"\n"}{"\n"}{"\n"}</Text>
            <Image source={Stitch} style={{width: 150, height: 150}}/>
            <Text style={styles.texto}>{"\n"}{props.nombre}</Text>
            <Text style={styles.texto}>{"\n"}{props.numero2}</Text>
            <Text style={styles.texto}>{"\n"}{props.carrera}</Text>
            <Text style={styles.texto}>{"\n"}{props.semestre}{"\n"}{"\n"}{"\n"}</Text>
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
  