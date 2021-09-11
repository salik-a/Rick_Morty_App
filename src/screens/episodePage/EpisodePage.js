import React,{useState,useEffect} from 'react';
import { Text, View, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';
import styles from './EpisodePageStyle'
import CharacterCard from './../../components/CharacterCard/CharacterCard'
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const EpisodePage = ({ route, navigation }) => {
   
   //variables are defined to save the called data and show the opening animation
    const [episodePageData, setEpisodePageData] = useState([]);
    const [loading, setLoading] = useState(true);

   // data is called using axios library and saved to state 
    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${route.params.url}`);
            setEpisodePageData(data);
            
        } catch (error) {
            console.log(error)
        }
        // close opening animation after data loaded
        setLoading(false);
    };

    //Animation is showing and data is calling while opening the page
    useEffect(() => {
        fetchData()
    }, []);
    
    // when clicked on the character cards switches to the character page
    const handleCharacterSelect = (url) => {
        navigation.navigate('CharacterPage', { url })
    };

    const watch = () => {
        navigation.navigate('WatchPage', { episodePageData })
    };

    //opening animation defined
    if (loading) { 
        return <LottieView source={require('./../../assets/animation/loading.json')} autoPlay loop style={{ backgroundColor: "rgba(60,62,68,0.9)" }} />;
    }
    
    // on the screen the information about the episode is displayed and the characters are listed
// when clicked the characters,  goes to the character page
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg" }} resizeMode="cover" style={{ flex: 1 }}>
                <View style={styles.innerContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{episodePageData.name}</Text>
                    </View>
                    <View style={styles.createdContainer}>
                        <Text style={styles.created}>{episodePageData.created}</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.episode}>{episodePageData.episode}</Text>
                        <Text style={styles.line}> - </Text>
                        <Text style={styles.air_date}>{episodePageData.air_date}</Text>
                    </View>
                    <TouchableOpacity style={styles.episodeContainer} onPress={() => watch()}>
                        <Ionicons name="play-outline" color={"white"} size={20} />
                        <Text style={styles.episode}>Watch</Text>
                    </TouchableOpacity>
                    <View style={styles.characterContainer}>
                        <Text style={styles.character}>Characters:</Text>
                    </View>
                    <FlatList
                        data={episodePageData.characters}
                        renderItem={({ item }) => <CharacterCard characters={item} onSelect={() => handleCharacterSelect(item)} />}
                        keyExtractor={(item, index) => index.toString()}
                        numColumns={"3"}
                    />
                </View>
            </ImageBackground>
        </View>
    );
}

export  {EpisodePage};