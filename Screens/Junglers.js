import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import  LeeSin from '../Images/LeeSin_0.jpg'
import Talon from '../Images/Talon_0.jpg'
import Graves from '../Images/Graves_0.jpg'
import Shaco from '../Images/Shaco_0.jpg'
import RekSai from '../Images/RekSai_0.jpg'
import Elise from '../Images/Elise_0.jpg'

export default function Junglers() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 15}}>
                <Image source={LeeSin} style={{width: 40, height: 40}}/>  LeeSin WinRate: 49.70% PickRate: 29.00% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={Talon} style={{width: 40, height: 40}}/>  Talon WinRate: 50.59% PickRate: 14.75% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={Graves} style={{width: 40, height: 40}}/>  Graves WinRate: 50.01%  PickRate: 18.49%  Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={Shaco} style={{width: 40, height: 40}}/>  Shaco WinRate: 53.50% PickRate: 4.90% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={RekSai} style={{width: 40, height: 40}}/>  Rek'Sai WinRate: 53.66% PickRate: 3.67% Tier 2{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={Elise} style={{width: 40, height: 40}}/>  Elise WinRate: 51.96% PickRate: 4.81% Tier 2{"\n"}</Text>
            <Image source={{uri: 'https://c.tenor.com/neRPkkM3QCIAAAAd/oooh-hot.gif'}}
                style={{width: 400, height: 200, alignSelf: 'center'}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'baseline',
      justifyContent: 'space-around',
    },
});