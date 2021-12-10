import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';
import Abautscreen from './AboutS';

export default function App() {
    return (
      <View style={styles.container}>
        <Abautscreen
        nombre="gerardo vega guerrero"
        nombre2="Gómez Flores Jesús Leonardo"
        carrera="tecnologias de la infomracion y la comunicacion"
        semestre="7to semestre"
        numero={18212079}
        numero2={12345677}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
});