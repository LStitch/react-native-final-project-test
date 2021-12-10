import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import  Zed from '../Images/Zed_0.jpg'
import Viktor from '../Images/Viktor_0.jpg'
import Akshan from '../Images/Akshan_0.png'
import Katarina from '../Images/Katarina_0.jpg'
import Kassadin from '../Images/Kassadin_0.jpg'
import LeBlanc from '../Images/Leblanc_0.jpg'

export default function MidLaners() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 15, color:'white'}}>
                <Image source={Zed} style={{width: 40, height: 40}}/>  Zed WinRate: 51.67% PickRate: 11.25% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15, color:'white'}}>
                <Image source={Viktor} style={{width: 40, height: 40}}/>  Viktor WinRate: 51.10% PickRate: 10.29% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15, color:'white'}}>
                <Image source={Akshan} style={{width: 40, height: 40}}/>  Akshan WinRate: 53.53%  PickRate: 4.10%  Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15, color:'white'}}>
                <Image source={Katarina} style={{width: 40, height: 40}}/>  Katarina WinRate: 51.83% PickRate: 6.80% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15, color:'white'}}>
                <Image source={Kassadin} style={{width: 40, height: 40}}/>  Kassadin WinRate: 51.63% PickRate: 8.59% Tier 2{"\n"}</Text>
            <Text style={{fontSize: 15, color:'white'}}>
                <Image source={LeBlanc} style={{width: 40, height: 40}}/>  LeBlanc WinRate: 49.01% PickRate: 12.02% Tier 2{"\n"}</Text>
            <Image source={{uri: 'https://i.pinimg.com/originals/7c/e4/3f/7ce43f3f8cbbbba86947dabcd81dbbdf.gif'}}
                style={{width: 400, height: 200, alignSelf: 'center'}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'baseline',
      justifyContent: 'space-around',
    },
});