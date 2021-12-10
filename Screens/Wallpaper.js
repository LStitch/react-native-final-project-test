import React, {useCallback} from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Alert, Linking } from 'react-native';
import {Image} from 'react-native';
import Constants from 'expo-constants';
import Vayne0 from '../Images/Vayne_0.jpg';
import Vayne1 from '../Images/Vayne_1.jpg';
import Vayne2 from '../Images/Vayne_2.jpg';
import Vayne3 from '../Images/Vayne_3.jpg';
import Vayne4 from '../Images/Vayne_4.jpg';
import Vayne5 from '../Images/Vayne_5.jpg';
import Vayne6 from '../Images/Vayne_6.jpg';
import Vayne10 from '../Images/Vayne_10.jpg';

export default function Wallpaper() {
    const vayne0 = "https://drive.google.com/file/d/135qdnhbE_eS1RD4rcFnXFO2F5O41HNOr/view?usp=sharing";
    const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
    }, [url]);

    return <Button title={children} onPress={handlePress} />;
    };


    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrull}>
                <Image
                    source={Vayne0}
                    style={styles.wallpapers}
                />
                <OpenURLButton url={vayne0}>Download</OpenURLButton>
                <Image
                    source={Vayne1}
                    style={styles.wallpapers}
                />
                <Image
                    source={Vayne2}
                    style={styles.wallpapers}
                />
                <Image
                    source={Vayne3}
                    style={styles.wallpapers}
                />
                <Image
                    source={Vayne4}
                    style={styles.wallpapers}
                />
                <Image
                    source={Vayne5}
                    style={styles.wallpapers}
                />
                <Image
                    source={Vayne6}
                    style={styles.wallpapers}
                />
                <Image
                    source={Vayne10}
                    style={styles.wallpapers}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'space-around',
    },

    scrull: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
  

    wallpapers: {
        width: 260,
        height: 160,
    }
});
  
