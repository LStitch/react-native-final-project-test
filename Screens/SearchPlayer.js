import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import axios from 'axios';


const SearchPlayer = ({navigation}) => {

    const [searchText, setSearchText] = useState('');
    const [playerData, setPlayerData] = useState('');
    const [playerRankedData, setPlayerRankedData] = useState('');
    const API_KEY = 'RGAPI-66538383-e555-45f0-90f0-e81ca5be1dc1';
    
    const search4Player = () => {
        var APICallString = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + searchText + '?api_key=' + API_KEY;
        fetch(APICallString)
            .then(data => {
                return data.json()
                }).then(resultado=>{
                    console.log(resultado);
                    setPlayerData(resultado);
                });
    }

    function ranked4Player () {
        var APICallString = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + playerData.id + '?api_key=' + API_KEY;
        fetch(APICallString)
            .then(data => {
                return data.json()
                }).then(resultado=>{
                    console.log(resultado);
                    setPlayerRankedData(resultado);
                });
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 15, fontWeight: 'bold', color:'white'}}>{"\n"}League of Legends Player Search{"\n"}</Text>
            <TextInput style={styles.input} onChange={e => setSearchText(e.target.value)}></TextInput>
            <Text></Text>
            <Button color="#000" title="Search" onPress={(() => search4Player())}>Search</Button>
            {
                playerData.length == 0
                ?
                <View>
                    <Text></Text>
                </View>
                
                :
                <View style={styles.sumoinfo}>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color:'white', alignSelf: 'center'}}>{"\n"}{playerData.name}{"\n"}{"\n"}</Text>
                    <Image style={styles.wallpapers} source={'https://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/'+ playerData.profileIconId + '.png'}/>
                    <Text style={{fontSize: 15, fontWeight: 'bold', color: 'white', alignSelf: 'center'}}>{"\n"}Level {playerData.summonerLevel}</Text>
                </View>
            
            }
        </View>
    )
}

export default SearchPlayer
/*


            
            {JSON.stringify(playerRankedData) != '{}' ? 
            <Text> Ranked SoloQ
            </Text>
            
            <Image></Image>
            <Text>Summoner level {playerData.summonerLevel}</Text>
            <Text>{playerRankedData.tier} {playerRankedData.rank}</Text>
            <Text>League Points {playerRankedData.leaguePoints} </Text>
            <Text>Wins {playerRankedData.wins}</Text>
            <Text>Losses {playerRankedData.losses}</Text>
            <Text> Total Games {playerRankedData.wins} + {playerRankedData.losses}</Text>
            <Text> Win Rate (({playerRankedData.wins}/({playerRankedData.wins} + {playerRankedData.losses}))*100).toFixed(1) %</Text>
            :
            <Text>No Player Data</Text>
            }
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        
    },

    sumoinfo: {
        flex: 1,
        margin: 10,
        alignContent: 'center',
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color:'white',
        borderColor: 'white',
        textAlign: 'center'
    },

    wallpapers: {
        width: 80,
        height: 80,
    },

    texto: {
        color: 'white'
    }
});