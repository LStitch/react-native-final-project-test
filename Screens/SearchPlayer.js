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
            <Text> League of Legends Player Search</Text>
            <TextInput style={styles.input} onChange={e => setSearchText(e.target.value)}></TextInput>
            <Button title="Search" onPress={(() => search4Player())}>Search</Button>
            {
                playerData.length == 0
                ?
                <View>
                    <Text></Text>
                </View>
                
                :
                <View style={styles.sumoinfo}>
                    <Text>{playerData.name}</Text>
                    <Image style={styles.wallpapers} source={'https://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/'+ playerData.profileIconId + '.png'}/>
                    <Text>Level {playerData.summonerLevel}</Text>
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
        backgroundColor: '#FFF',
        alignItems: 'center',
        marginBottom: 200,
        marginTop: 200,
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
    },

    wallpapers: {
        width: 80,
        height: 80,
    }
});