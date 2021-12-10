import React, {useCallback} from 'react'
import { StyleSheet, Text, View, Button, Alert, Linking } from 'react-native'
import {Image} from 'react-native'

export default function Basico() {
    const sitelstitch = "https://lstitch-class.super.site";
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
            <Image source={{uri: 'https://3con14.biz/js/_data/_config/js.png'}}
                style={{width: 300, height: 350}}/>
            <OpenURLButton url={sitelstitch}>LStitch Page</OpenURLButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
});
  