import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from "./PagesStyle"



const MainPage = ({ navigation }) => {

    const [loading, setLoading] = useState(true);
    const delay = ms => new Promise(res => setTimeout(res, ms));


    const open = async () => {

        await delay(1250);
        setLoading(false);
    };
    useEffect(() => {
        open()
    }, []);

    if (loading) {
        return (
            <View style={styles.container}>
                <ImageBackground source={{ uri: "https://d2lzb5v10mb0lj.cloudfront.net/covers/600/30/3007790.jpg" }} resizeMode="cover" style={{ flex: 1, }} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: "http://pngimg.com/uploads/rick_morty/rick_morty_PNG20.png" }} resizeMode="contain" style={{ flex: 1, backgroundColor: "#24282f" }}>
                <View style={styles.button} >
                    <TouchableOpacity onPress={() => navigation.navigate("FirstPage")} style={styles.go}>
                        <Text style={styles.text}>Go Episodes</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>

        </View>
    );
}

export { MainPage };
