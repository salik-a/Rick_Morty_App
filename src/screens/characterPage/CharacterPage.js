import React,{useState, useEffect} from 'react';
import { Text, View, Button, Image} from 'react-native';
import axios from 'axios';
import Octicons from 'react-native-vector-icons/Octicons';

import styles from './CharacterPageStyle'
const CharacterPage = ({ route }) => {

    const [characterPageData, setCharacterPageData] = useState([]);
    //const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);
    

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${route.params.url}`);
            setCharacterPageData(data);
            //setLoading(false);
        } catch (error) {
            //setError(error.message);
            //setLoading(false);
        };
        
    
    };

    
    useEffect(() => {
        console.log(route.params.url)
        fetchData()
        
    }, []);
    
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
                    {characterPageData.status == "Dead" ? (<Octicons name="primitive-dot" color={"red"} size={30}  />) : (<Octicons name="primitive-dot" color={"green"} size={30}  />)}
                    <Text style={styles.status}>{characterPageData.status}</Text>
                </View>
                <View style={styles.typeContainer}> 
                    <Text style={styles.species}>{characterPageData.species}</Text>
                    <Text style={styles.gender}>{characterPageData.gender}</Text>
                </View>
                
                
            
           
            
            </View>
        </View>
       
    );
}

export  {CharacterPage};