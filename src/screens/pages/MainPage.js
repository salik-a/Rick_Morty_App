import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from "./PagesStyle"



const MainPage = ({ navigation }) => {
    
    // uygulama açılırken açılış ekranı göstermesi için değişkenler tanımlandı
    const [loading, setLoading] = useState(true);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    //bu fonksiyon açılış ekranını bir süre gösteriyor ve sonra kapatıyor
    const open = async () => {

        await delay(1250);
        setLoading(false);
    };

    //uygulama başladığında fonksiyon çağırılıyor
    useEffect(() => {
        open()
    }, []);

    //uygulama açılış ekranı oluşturuldu
    if (loading) {
        return (
            <View style={styles.container}>
                <ImageBackground source={{ uri: "https://d2lzb5v10mb0lj.cloudfront.net/covers/600/30/3007790.jpg" }} resizeMode="cover" style={{ flex: 1, }} />
            </View>
        )
    }

    //ana ekran tanımlandı
    //bir imagebackgrounda sahip ekranda butona basınca ilk sayfaya geçiş yapılıyor
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
