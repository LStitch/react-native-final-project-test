import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import Constants from 'expo-constants';

const SearchPlayerPrueba = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image img source={{uri: 'https://static.vecteezy.com/system/resources/previews/002/236/419/non_2x/weather-banner-vector.jpg'}}
                style={styles.imag}/>
      <Text style={styles.texto}> Pronóstico de </Text>
      
    </View>
  );
};

export default SearchPlayerPrueba;

//Estilos tipo CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#00FFFF',
  },
  texto: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
  },
  imag: {
    alignContent: 'center',
    height: 200,
    backgroundColor: '#00FFFF',
  }
});