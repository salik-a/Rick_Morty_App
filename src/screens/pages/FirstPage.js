import React,{useState,useEffect} from 'react';
import { Text, View, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';
import EpisodeCard from './../../components/EpisodeCard/EpisodeCard'
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./PagesStyle"



const FirstPage = ({ navigation }) => {
    const [firstPageData, setFirstPageData] = useState([]);
    const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const fetchData = async () => {
        try {
            const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
            setFirstPageData(data);
            
        } catch (error) {
            //setError(error.message);
            //setLoading(false);
        }
        await delay(1000);
        setLoading(false);
    };

    const handleNext = (data) => {
        navigation.navigate('SecondPage', { data })
        
    } 
    useEffect(() => {
        fetchData()
    }, []);
    
    const handleCardSelect = (url) => {
        navigation.navigate('EpisodePage', { url })
    };
    
    if (loading) { 
        return (
            <View style={styles.container}>
                <ImageBackground source={{ uri: "https://d2lzb5v10mb0lj.cloudfront.net/covers/600/30/3007790.jpg" }} resizeMode="cover" style={{ flex: 1 }}>

                </ImageBackground>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg" }} resizeMode="cover" style={{ flex: 1 }}>
                <TouchableOpacity onPress={() => handleNext(firstPageData.info.next)} style={styles.firstHeader} >
                    <Text style={styles.next}>NextPage  </Text>
                    <Ionicons name="arrow-forward-circle" color={"white"} size={24} />
                </TouchableOpacity>

                <FlatList
                    //ListHeaderComponent={() => (<SearchInput/>)}
                    renderItem={({ item }) => <EpisodeCard episode={item} onSelect={() => handleCardSelect(item.url)} />}
                    data={firstPageData.results}
                    keyExtractor={item => item.id}
                    numColumns={"1"}
                />
            </ImageBackground>

        </View>
    );
}

export  {FirstPage};
