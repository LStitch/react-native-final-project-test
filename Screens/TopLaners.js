import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import  Viktor from '../Images/Viktor_0.jpg'
import Yone from '../Images/Yone_0.png'
import Vayne from '../Images/Vayne_0_.jpg'
import Irelia from '../Images/Irelia_0.jpg'
import Jayce from '../Images/Jayce_0.jpg'
import Teemo from '../Images/Teemo_0.jpg'

export default function TopLaners() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 15}}>
                <Image source={Viktor} style={{width: 40, height: 40}}/>  Viktor WinRate: 52.07% PickRate: 7.58% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={Vayne} style={{width: 40, height: 40}}/>  Vayne WinRate: 53.20% PickRate: 5.29% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={Irelia} style={{width: 40, height: 40}}/>  Irelia WinRate: 50.56%  PickRate: 10.36%  Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={Jayce} style={{width: 40, height: 40}}/>  Jayce WinRate: 48.49% PickRate: 21.12% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={Yone} style={{width: 40, height: 40}}/>  Yone WinRate: 48.88% PickRate: 14.11% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={Teemo} style={{width: 40, height: 40}}/>  Teemo WinRate: 51.06% PickRate: 2.95% Tier 2{"\n"}</Text>
            <Image source={{uri: 'https://i.pinimg.com/originals/9c/ce/c4/9ccec4f5311e4925c9be8761549fa69b.gif'}}
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