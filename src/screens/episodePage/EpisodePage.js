import React,{useState,useEffect} from 'react';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

import CharacterCard from './../../components/CharacterCard/CharacterCard'
import LottieView from 'lottie-react-native';


const EpisodePage = ({ route, navigation }) => {
   
    const [episodePageData, setEpisodePageData] = useState([]);
    const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${route.params.url}`);
            setEpisodePageData(data);
            
        } catch (error) {
            //setError(error.message);
            //setLoading(false);
        }
        setLoading(false);
    };
    useEffect(() => {
        fetchData()
    }, []);
    
    
    const handleCharacterSelect = (url) => {
        navigation.navigate('CharacterPage', { url })
    };

    if (loading) { 
        return <LottieView source= { require('./../../assets/animation/loading.json')} autoPlay loop/>;
    }
    
    return (
        <View>
            <Text>{episodePageData.id}</Text>
            <Text>{episodePageData.name}</Text>
            <Text>{episodePageData.air_date}</Text>
            <Text>{episodePageData.episode}</Text>
            <Text>{episodePageData.url}</Text>
            <Text>{episodePageData.created}</Text>

            <FlatList
                data={episodePageData.characters}
                renderItem={({item}) => <CharacterCard characters={item} onSelect={()=>handleCharacterSelect(item)} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

export  {EpisodePage};