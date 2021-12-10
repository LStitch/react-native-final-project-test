import React, {useCallback} from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Alert, Linking } from 'react-native';
import {Image} from 'react-native';
import Constants from 'expo-constants';
import Channel0 from '../Images/Channel_0.png';
import Channel1 from '../Images/Channel_1.png';
import Channel2 from '../Images/Channel_2.png';
import Channel3 from '../Images/Channel_3.png';
import Channel4 from '../Images/Channel_4.png';
import Channel5 from '../Images/Channel_5.png';
import Channel6 from '../Images/Channel_6.png';
import Channel7 from '../Images/Channel_7.png';

export default function Wallpaper() {
    const channel0 = "https://www.youtube.com/channel/UCSDsRtYwcZg_paK7KVlx4Xg";
    const channel1 = "https://www.youtube.com/c/skillcapped";
    const channel2 = "https://www.youtube.com/c/LoponOficial";
    const channel3 = "https://www.youtube.com/c/NEACE";
    const channel4 = "https://www.youtube.com/c/ProGuidescom";
    const channel5 = "https://www.youtube.com/c/RvzStealthLoL";
    const channel6 = "https://www.youtube.com/c/LolProAcademy";
    const channel7 = "https://www.youtube.com/channel/UCvJK2oZgjX5sSiXHicThFBw";
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
                <Text style={{color:'white', fontSize:18, fontWeight: 'bold'}}>{"\n"}Canales con contenido de LoL en Youtube{"\n"}</Text>
                <Text style={styles.texto}>{"\n"}{"\n"}TenYasha LoL</Text>
                <Image
                    source={Channel0}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={channel0}>Channel</OpenURLButton>
                <Text style={styles.texto}>{"\n"}{"\n"}Skill Capped Challenger LoL Guides</Text>
                <Image
                    source={Channel1}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={channel1}>Channel</OpenURLButton>
                <Text style={styles.texto}>{"\n"}{"\n"}Lopon</Text>
                <Image
                    source={Channel2}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={channel2}>Channel</OpenURLButton>
                <Text style={styles.texto}>{"\n"}{"\n"}NEACE</Text>
                <Image
                    source={Channel3}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={channel3}>Channel</OpenURLButton>
                <Text style={styles.texto}>{"\n"}{"\n"}ProGuides Challenger LoL Guides</Text>
                <Image
                    source={Channel4}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={channel4}>Channel</OpenURLButton>
                <Text style={styles.texto}>{"\n"}{"\n"}RvzStealth</Text>
                <Image
                    source={Channel5}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={channel5}>Channel</OpenURLButton>
                <Text style={styles.texto}>{"\n"}{"\n"}MattProAcademy</Text>
                <Image
                    source={Channel6}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={channel6}>Channel</OpenURLButton>
                <Text style={styles.texto}>{"\n"}{"\n"}GameLeap LoL Challenger Guides</Text>
                <Image
                    source={Channel7}
                    style={styles.wallpapers}
                />
                <OpenURLButton style={styles.butone} url={channel7}>Channel</OpenURLButton>
                <Text style={styles.texto}>{"\n"}{"\n"}</Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      alignItems: 'center',
    },

    wallpapers: {
        width: 330,
        height: 230,
        margin: 15,
    },

    butone: {
        margin: 50,
    },

    texto: {
        fontSize: 18,
        textAlign: 'center',
        color:'white',
    },
});
  
