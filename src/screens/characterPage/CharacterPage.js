import React,{useState, useEffect} from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import axios from 'axios';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import styles from './CharacterPageStyle';

const CharacterPage = ({ route }) => {

    const [characterPageData, setCharacterPageData] = useState([]);
    const [locationData, setLocationData] = useState([]);
    const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${route.params.url}`);
            setCharacterPageData(data);
            setLocationData(data.location);

        } catch (error) {
            //setError(error.message);
            //setLoading(false);
        };
        await delay(500);
        setLoading(false);
    
    };

    
    useEffect(() => {
        fetchData()
        
    }, []);
    
    if (loading) {
        return <LottieView source={require('./../../assets/animation/loading.json')} autoPlay loop style={{ backgroundColor: "rgba(60,62,68,0.9)" }} />;
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={{ uri: "https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg" }} resizeMode="cover" style={{ flex: 1 }}>
                <View style={styles.innerContainer}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `${characterPageData.image}`,
                        }}
                    />

                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>{characterPageData.name}</Text>
                    </View>
                    <View style={styles.statusContainer}>
                        {characterPageData.status == "Dead" ? (<Octicons name="primitive-dot" color={"red"} size={24} />) : (<Octicons name="primitive-dot" color={"green"} size={24} />)}
                        <Text style={styles.status}>{characterPageData.status}</Text>
                    </View>
                    <View style={styles.typeContainer}>
                        {characterPageData.species == "Human" ? (<Ionicons name="person" color={"teal"} size={24} />) :
                            (characterPageData.species == "Disease" ? (<FontAwesome5 name="disease" color={"yellow"} size={24} />) :
                                (characterPageData.species == "Animal" ? (<MaterialCommunityIcons name="cat" color={"chocolate"} size={24} />) :
                                    (<MaterialCommunityIcons name="alien" color={"green"} size={24} />)))
                        }
                        <Text style={styles.species}>{characterPageData.species}</Text>
                        <Text style={styles.line}>-</Text>
                        <Ionicons name="transgender" color={characterPageData.gender == "Male" ? ("cyan") : (characterPageData.gender == "Female" ? ("pink") : ("purple"))} size={24} />
                        <Text style={styles.gender}>{characterPageData.gender}</Text>
                    </View>
                    <View style={styles.locationContainer}>
                        <Ionicons name="planet" color={"orange"} size={24} />
                        <Text style={styles.location}>{locationData.name}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
       
    );
}

export  {CharacterPage};