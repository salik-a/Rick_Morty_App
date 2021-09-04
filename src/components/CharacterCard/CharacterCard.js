import React,{useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import styles from './CharacterCardStyle';
import axios from 'axios';

const CharacterCard = ( {characters, onSelect} ) => {
     const [characterData, setCharacterData] = useState([]);
    //const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${characters}`);
            setCharacterData(data);
            //setLoading(false);
        } catch (error) {
            //setError(error.message);
            //setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchData()
    }, []);
    
    return (
        <TouchableWithoutFeedback onPress={onSelect} >
            <View style={styles.container} >
                <View style={styles.innerContainer} >
                    <Image
                        style={styles.image}
                        source={{
                            uri: `${characterData.image}`,
                        }}
                    />
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>
                            {characterData.name}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};
export default CharacterCard;