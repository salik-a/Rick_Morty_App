import React,{useState, useEffect} from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import styles from './CharacterCardStyle';
import axios from 'axios';

const CharacterCard = ({ characters, onSelect }) => {

    //variables are defined to save the called data 
    const [characterData, setCharacterData] = useState([]);

    // data is called using axios library and saved to state 
    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${characters}`);
            setCharacterData(data);

        } catch (error) {
            console.log(error)
        }
    };
    
    //data is calling while opening the page
    useEffect(() => {
        fetchData()
    }, []);
    
    //information about characters showed on the cards
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