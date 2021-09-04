
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "#24282f",
        flex: 1,
        
    },
    innerContainer: {
        flex: 1,
        margin: 20,
        borderRadius: 10,
        backgroundColor: "#3c3e44",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
        
        
    },

    name: {
        fontWeight: "bold",
        fontSize: 32,
        color: "white"
    },
    episode: {
        color: "white",
        fontSize: 20,
        marginLeft: 10
    },
    air_date: {
        color: "white",
        fontSize: 22,
        marginLeft: 6
    },
    created: {
        color: "white",
        fontSize: 22,
        marginLeft: 6
    },
    line: {
        fontWeight: "bold",
        color: "white",
        fontSize: 22,
        marginHorizontal: 10
    },
    nameContainer: {
        margin: 10,
        alignItems: "center"
    },
    topeContainer: {
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }
});