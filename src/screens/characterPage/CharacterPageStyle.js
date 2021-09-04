
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "#24282f",
        flex: 1,
        
    },
    innerContainer: {
        flex: 1,
        margin: 25,
        borderRadius: 10,
        backgroundColor: "#3c3e44",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        
        
    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 10,
        backgroundColor: "white"
    },
    name: {
        fontWeight: "bold",
        fontSize: 32,
        color: "white"
    },
    status: {
        color: "white"
    },
    species: {
        color: "white"
    },
    gender: {
        color: "white"
    },
    origin: {
        color: "white"
    },
    nameContainer: {
        margin: 10,
        alignItems: "center"
    },
    statusContainer: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    typeContainer: {
        margin: 10,
        alignItems: "center"
       
    }
});