import React from 'react';
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import styles from './EpisodeCardStyle'
import Ionicons from 'react-native-vector-icons/Ionicons';
const EpisodeCard = ({ episode, onSelect }) => {
    
     //information about episodes showed on the cards
    return (
        <TouchableWithoutFeedback   onPress={onSelect}>
            <View style={styles.container} >

                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{episode.id} - {episode.name}</Text>
                </View>
                <View style={styles.createdContainer}>
                    <Text style={styles.created}>{episode.created}</Text>
                </View>
                <View style={styles.dateContainer}>
                    <Text style={styles.air_date}>{episode.air_date}</Text>
                </View>
                <TouchableOpacity style={styles.episodeContainer} onPress={onSelect} >
                    <Ionicons name="play-outline" color={"white"} size={20} />
                    <Text style={styles.episode}>{episode.episode}</Text>
                </TouchableOpacity>
                
            </View>
        </TouchableWithoutFeedback>
    );
};
export default EpisodeCard;