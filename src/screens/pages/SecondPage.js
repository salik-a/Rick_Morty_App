import React,{useState,useEffect} from 'react';
import { Text, View, Button, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import axios from 'axios';
import EpisodeCard from './../../components/EpisodeCard/EpisodeCard'
import LottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from "./PagesStyle"

const SecondPage = ({ route, navigation }) => {
    
    const [secondPageData, setSecondPageData] = useState([]);
    const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);
    const delay = ms => new Promise(res => setTimeout(res, ms));
    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${route.params.data}`);
            setSecondPageData(data);
           
        } catch (error) {
            //setError(error.message);
            //setLoading(false);
            
        };
        await delay(250);
        setLoading(false);
    }
    const handleNext = (data) => {
        navigation.navigate('ThirdPage',{data})
        
    } 
    useEffect(() => {
        fetchData();
        
    }, []);

    const handleCardSelect = (url) => {
        navigation.navigate('EpisodePage', { url })
    };
    
    if (loading) {
        return <LottieView source={require('./../../assets/animation/loading.json')} autoPlay loop style={{ backgroundColor: "rgba(60,62,68,0.9)" }} />;
    };

    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg" }} resizeMode="cover" style={{}}>
                <View style={styles.secondHeader} >
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="arrow-back-circle" color={"white"} size={24} />
                        <Text style={styles.next}>  PreviousPage</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleNext(secondPageData.info.next)} style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.next}>NextPage  </Text>
                        <Ionicons name="arrow-forward-circle" color={"white"} size={24} />
                    </TouchableOpacity>
                </View>
                <FlatList
                    //ListHeaderComponent={() => (<SearchInput/>)}
                    renderItem={({ item }) => <EpisodeCard episode={item} onSelect={() => handleCardSelect(item.url)} />}
                    data={secondPageData.results}
                    keyExtractor={item => item.id}
                    numColumns={"1"}
                />
            </ImageBackground>
        </View>
    );
}

export  {SecondPage};