import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import  Blitzcrank from '../Images/Blitzcrank_0.jpg'
import Xerath from '../Images/Xerath_0.jpg'
import Leona from '../Images/Leona_0.jpg'
import Lulu from '../Images/Lulu_0.jpg'
import Thresh from '../Images/Thresh_0.jpg'
import Maokai from '../Images/Maokai_0.jpg'

export default function Supports() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 15}}>
                <Image source={Blitzcrank} style={{width: 40, height: 40}}/>  Blitzcrank WinRate: 52.07% PickRate: 7.58% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={Xerath} style={{width: 40, height: 40}}/>  Xerath WinRate: 53.20% PickRate: 5.29% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={Leona} style={{width: 40, height: 40}}/>  Leona WinRate: 50.56%  PickRate: 10.36%  Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={Lulu} style={{width: 40, height: 40}}/>  Lulu WinRate: 48.49% PickRate: 21.12% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={Thresh} style={{width: 40, height: 40}}/>  Thresh WinRate: 48.88% PickRate: 14.11% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15}}>
                <Image source={Maokai} style={{width: 40, height: 40}}/>  Maokai WinRate: 51.06% PickRate: 2.95% Tier 2{"\n"}</Text>
            <Image source={{uri: 'https://pa1.narvii.com/7362/f510f2633c064a266b1fee82b215b4e220b1d5d1r1-480-270_hq.gif'}}
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