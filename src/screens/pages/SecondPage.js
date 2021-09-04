import React,{useState,useEffect} from 'react';
import { Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import EpisodeCard from './../../components/EpisodeCard/EpisodeCard'
import LottieView from 'lottie-react-native';

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
        return <LottieView source= { require('./../../assets/animation/loading.json')} autoPlay loop/>;
    };

    return (
        <View style={{flex:1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between' ,alignItems: 'center', margin:10}} >
                <TouchableOpacity  onPress={() => navigation.goBack()} style={{flexDirection: 'row', justifyContent: 'center' ,alignItems: 'center'}}>
                    <Text>
                        PreviousPage 
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => handleNext(secondPageData.info.next)} style={{flexDirection: 'row', justifyContent: 'center' ,alignItems: 'center'}}>
                    <Text>
                        NextPage 
                    </Text>
                    
                </TouchableOpacity>
            </View>
            <FlatList
                //ListHeaderComponent={() => (<SearchInput/>)}
                renderItem={({item}) => <EpisodeCard episode={item}  onSelect={()=>handleCardSelect(item.url)}/>}
                data={secondPageData.results}
                keyExtractor={item => item.id}
            />

        </View>
    );
}

export  {SecondPage};