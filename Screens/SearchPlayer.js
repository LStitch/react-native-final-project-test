import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Input, Image } from 'react-native'
import axios from 'axios';


const SearchPlayer = ({navigation}) => {

    const [searchText, setSearchText] = useState('');
    const [playerData, setPlayerData] = useState('');
    const [playerRankedData, setPlayerRankedData] = useState('');
    const API_KEY = 'RGAPI-23685266-e098-4bc2-b4e3-9d9c0654ca3b';
    
    function search4Player (event) {
        var APICallString = 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + searchText + '?api_key=' + API_KEY;
        axios.get(APICallString).then(function (response) {
            //Success
            setPlayerData(response.data);
        }).catch(function (error) {
            //Error
            console.log(error);
        });
    }

    function ranked4Player (event) {
        var APICallString = 'https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/' + playerData.id + '?api_key=' + API_KEY;
        axios.get(APICallString).then(function (response) {
            //Success
            setPlayerRankedData(response.data);
        }).catch(function (error) {
            //Error
            console.log(error);
        });
    }

    return (
        <View style={styles.container}>
            <Text> League of Legends Player Search</Text>
            <Input type='text' onChange={e => setSearchText(e.target.value)}></Input>
            
        </View>
    )
}

export default SearchPlayer

/*
<Button onClick={(e => search4Player(e))}>Search</Button>
            {JSON.stringify(playerData) != '{}' ? 
            <Text>{playerData.name}
            <Image src={'http://ddragon.leagueoflegends.com/cdn/11.21.1/img/profileicon/' + playerData.profileIconId + '.png'}></Image>
            Summoner level {playerData.summonerLevel}</Text>
            <Image></Image>
            <Text>Summoner level {playerData.summonerLevel}</Text>
            :
            <Text>No Player Data</Text>
            }
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
      backgroundColor: '#fff',
    },
});