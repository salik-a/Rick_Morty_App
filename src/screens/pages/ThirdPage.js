import React,{useState,useEffect} from 'react';
import { Text, View, Button, FlatList, TouchableOpacity,BackHandler } from 'react-native';
import axios from 'axios';
import EpisodeCard from './../../components/EpisodeCard/EpisodeCard'
import LottieView from 'lottie-react-native';

const ThirdPage = ({ navigation,route}) => {
    const [thirdPageData, setThirdPageData] = useState([]);
    const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`${route.params.data}`);
            setThirdPageData(data);
            //setLoading(false);
        } catch (error) {
            //setError(error.message);
            //setLoading(false);
        }
        await delay(250);
        setLoading(false);
    };


    useEffect(() => {
        fetchData();
        
    }, []);

    const handleCardSelect = (url) => {
        navigation.navigate('EpisodePage', { url })
        
    };

    if (loading) {
        return <LottieView source={require('./../../assets/animation/loading.json')} autoPlay loop style={{ backgroundColor: "#3c3e44" }} />;
    };

    return (
        <View style={{flex:1}}>
            <TouchableOpacity  onPress={() => navigation.goBack()} style={{flexDirection: 'row' ,alignItems: 'center', margin:10}}>
                <Text>
                    PreviousPage 
                </Text>
            </TouchableOpacity>

            <FlatList
                //ListHeaderComponent={() => (<SearchInput/>)}
                renderItem={({item}) => <EpisodeCard episode={item}  onSelect={()=>handleCardSelect(item.url)}/>}
                data={thirdPageData.results}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

export  {ThirdPage};