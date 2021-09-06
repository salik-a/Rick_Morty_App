import React,{useState,useEffect} from 'react';
import { Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';
import EpisodeCard from './../../components/EpisodeCard/EpisodeCard'
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./PagesStyle"

const ThirdPage = ({ navigation, route }) => {

     //variables are defined to save the called data and show the opening animation
    const [thirdPageData, setThirdPageData] = useState([]);
    const [loading, setLoading] = useState(true);
    const delay = ms => new Promise(res => setTimeout(res, ms));


    // data is called using axios library and saved to state 
    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${route.params.data}`);
            setThirdPageData(data);

        } catch (error) {
            console.log(error)
        }
        // close opening animation after data loaded
        await delay(250);
        setLoading(false);
    };

    //Animation is showing and data is calling while opening the page
    useEffect(() => {
        fetchData();
        
    }, []);

    // when clicked on the episode cards switches to the episode page
    const handleCardSelect = (url) => {
        navigation.navigate('EpisodePage', { url })
    };

    //opening animation defined
    if (loading) {
        return <LottieView source={require('./../../assets/animation/loading.json')} autoPlay loop style={{ backgroundColor: "rgba(60,62,68,0.9)" }} />;
    };

    // the episodes are listed as cards on the page screen
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg" }} resizeMode="cover" style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.thirdHeader}>
                    <Ionicons name="arrow-back-circle" color={"white"} size={24} />
                    <Text style={styles.next}>  PreviousPage</Text>
                </TouchableOpacity>

                <FlatList

                    renderItem={({ item }) => <EpisodeCard episode={item} onSelect={() => handleCardSelect(item.url)} />}
                    data={thirdPageData.results}
                    keyExtractor={item => item.id}
                    numColumns={"1"}
                />
            </ImageBackground>
        </View>
    );
}

export  {ThirdPage};