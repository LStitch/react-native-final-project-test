import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Vayne from '../Images/Vayne_0_.jpg'
import Jinx from '../Images/Jinx_0.jpg'
import Jhin from '../Images/Jhin_0.jpg'
import Ezreal from '../Images/Ezreal_0.jpg'
import Caitlyn from '../Images/Caitlyn_0.jpg'
import Ziggs from '../Images/Ziggs_0.jpg'

export default function ADCarrys() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 15, color:'white'}}>
                <Image source={Vayne} style={{width: 40, height: 40}}/>  Vayne WinRate: 54.08% PickRate: 13.30% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15, color:'white'}}>
                <Image source={Jinx} style={{width: 40, height: 40}}/>  Jinx WinRate: 50.21% PickRate: 26.95% Tier 1{"\n"}</Text>
            <Text style={{fontSize: 15, color:'white'}}>
                <Image source={Jhin} style={{width: 40, height: 40}}/>  Jhin WinRate: 50.50%  PickRate: 30.86%  Tier 2{"\n"}</Text>
            <Text style={{fontSize: 15, color:'white'}}>
                <Image source={Ezreal} style={{width: 40, height: 40}}/>  Ezreal WinRate: 49.95% PickRate: 29.51% Tier 2{"\n"}</Text>
            <Text style={{fontSize: 15, color:'white'}}>
                <Image source={Caitlyn} style={{width: 40, height: 40}}/>  Caitlyn WinRate: 49.72% PickRate: 20.89% Tier 2{"\n"}</Text>
            <Text style={{fontSize: 15, color:'white'}}>
                <Image source={Ziggs} style={{width: 40, height: 40}}/>  Ziggs WinRate: 54.17% PickRate: 2.91% Tier 2{"\n"}</Text>
            <Image source={{uri: 'https://j.gifs.com/v1G8wQ.gif'}}
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