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
    const vayne1 = "https://drive.google.com/file/d/1BqRgOhhRLfcqhpzFO8bfdVG_sxhGiQyJ/view?usp=sharing";
    const vayne2 = "https://drive.google.com/file/d/1IJwcyuLUAPv2jaWYClOwsYaO9_-smFWc/view?usp=sharing";
    const vayne3 = "https://drive.google.com/file/d/11QdH3EDcKG6p9LHBR3SrNsOb2ZcAOIsk/view?usp=sharing";
    const vayne4 = "https://drive.google.com/file/d/1N6eQFdocfryz4DzmEW3Nj1bTRemCMldg/view?usp=sharing";
    const vayne5 = "https://drive.google.com/file/d/16mqJXHKFEbAEqXT-A3-X-XpuhLFznWY_/view?usp=sharing";
    const vayne6 = "https://drive.google.com/file/d/12zhW-LJVHVeYkafS0uH5U9rX4P6Ot7DY/view?usp=sharing";
    const vayne10 = "https://drive.google.com/file/d/1SI5hU8lZrvku5nEC3-P091darl4YwVYv/view?usp=sharing";
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
            <ScrollView>
                <Image
                    source={Vayne0}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={vayne0}>Download</OpenURLButton>
                <Image
                    source={Vayne1}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={vayne1}>Download</OpenURLButton>
                <Image
                    source={Vayne2}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={vayne2}>Download</OpenURLButton>
                <Image
                    source={Vayne3}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={vayne3}>Download</OpenURLButton>
                <Image
                    source={Vayne4}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={vayne4}>Download</OpenURLButton>
                <Image
                    source={Vayne5}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={vayne5}>Download</OpenURLButton>
                <Image
                    source={Vayne6}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={vayne6}>Download</OpenURLButton>
                <Image
                    source={Vayne10}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={vayne10}>Download</OpenURLButton>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
      marginTop: Constants.statusBarHeight,
    },

    wallpapers: {
        width: 260,
        height: 160,
        margin: 15,
    },

    butone: {
        margin: 50,
    }
});
  
