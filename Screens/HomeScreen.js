import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {Image} from 'react-native'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri: 'https://esports.eldesmarque.com/wp-content/uploads/2019/09/LoL2.jpg'}}
                style={{width: 350, height: 200}}/>
            <Text></Text>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>The app to learn about league of legends universe</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
  