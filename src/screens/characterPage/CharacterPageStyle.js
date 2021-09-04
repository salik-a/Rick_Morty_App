
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "#24282f",
        flex: 1,

    },
    innerContainer: {
        flex: 1,
        margin: 25,
        borderRadius: 10,
        backgroundColor: "rgba(60,62,68,0.95)",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        alignItems: "center",


    },
    image: {
        width: "100%",
        height: 300,
        borderRadius: 10,

    },
    name: {
        fontWeight: "bold",
        fontSize: 32,
        color: "white"
    },
    status: {
        color: "white",
        fontSize: 20,
        marginLeft: 10
    },
    species: {
        color: "white",
        fontSize: 22,
        marginLeft: 6
    },
    gender: {
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
    location: {
        color: "white",
        fontSize: 22,
        marginLeft: 10
    },
    locationContainer: {
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",

    },
    nameContainer: {
        margin: 10,
        alignItems: "center"
    },
    statusContainer: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    typeContainer: {

        margin: 10,
        maxWidth: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    }
});