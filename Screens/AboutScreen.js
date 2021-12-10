import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';
import Abautscreen from './AboutS';

export default function App() {
    return (
      <View style={styles.container}>
        <Abautscreen
        nombre="Vega Guerrero Gerardo"
        nombre2="Gómez Flores Jesús Leonardo"
        carrera="Tecnologias de la Información y Comunicaciones"
        semestre="7mo semestre"
        numero2={18212079}
        numero={18212066}
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