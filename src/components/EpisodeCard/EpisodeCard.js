import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import styles from './EpisodeCardStyle'

const EpisodeCard = ( {episode, onSelect} ) => {
    
    
    return (
        <TouchableWithoutFeedback   onPress={onSelect}>
            <View style={styles.container} >
                <Text>{episode.id}</Text>
                <Text>{episode.name}</Text>
                <Text>{episode.episode}</Text>
                <Text>{episode.created}</Text>
                <Text>{episode.air_date}</Text>
                <Text>{episode.url}</Text>
                
            </View>
        </TouchableWithoutFeedback>
    );
};
export default EpisodeCard;