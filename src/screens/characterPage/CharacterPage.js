import React,{useState, useEffect} from 'react';
import { Text, View, Button, Image} from 'react-native';
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
        console.log(route.params.url)
        fetchData()
        
    }, []);
    
    if (loading) {
        return <LottieView source={require('./../../assets/animation/loading.json')} autoPlay loop style={{ backgroundColor: "#3c3e44" }} />;
    }

    return (
        <View style={styles.container}>
           
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
                    {characterPageData.status == "Dead" ? (<Octicons name="primitive-dot" color={"red"} size={20} />) : (<Octicons name="primitive-dot" color={"green"} size={20} />)}
                    <Text style={styles.status}>{characterPageData.status}</Text>
                </View>
                <View style={styles.typeContainer}>
                    {characterPageData.species == "Human" ? (<Ionicons name="person" color={"white"} size={20} />) :
                        (characterPageData.species == "Disease" ? (<FontAwesome5 name="disease" color={"white"} size={20} />) :
                            (characterPageData.species == "Animal" ? (<MaterialCommunityIcons name="cat" color={"white"} size={20} />) :
                                (<MaterialCommunityIcons name="alien" color={"white"} size={20} />)))
                    }
                    <Text style={styles.species}>{characterPageData.species}</Text>
                    <Text style={styles.line}>-</Text>
                    <Ionicons name="transgender" color={"white"} size={20} />
                    <Text style={styles.gender}>{characterPageData.gender}</Text>
                </View>
                <View style={styles.locationContainer}>
                    <Ionicons name="planet" color={"white"} size={20} />
                    <Text style={styles.location}>{locationData.name}</Text>
                </View>

                
                
            
           
            
            </View>
        </View>
       
    );
}

export  {CharacterPage};