
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        borderRadius: 10,
        backgroundColor: "rgba(60,62,68,0.85)",
        
        padding: 2
    },

    name: {
        fontWeight: "bold",
        fontSize: 30,
        color: "white"
    },
    created: {
        color: "#a9a9a9",
        fontSize: 14,
        fontStyle: "italic"
    },
    air_date: {
        color: "white",
        fontSize: 20,
        marginLeft: 6
    },
    episode: {
        color: "white",
        fontSize: 20,
        marginLeft: 8
    },
    nameContainer: {
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    createdContainer: {
        marginTop: 4,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    dateContainer: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    episodeContainer: {
        padding: 5,
        marginVertical: 10,
        marginHorizontal: 100,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 20
    },

  
});
