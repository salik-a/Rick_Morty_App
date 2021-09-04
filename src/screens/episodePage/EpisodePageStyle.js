
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: "#3c3e44",
        flex: 1,

    },
    innerContainer: {
        flex: 1,

        margin: 10,
        backgroundColor: "rgba(60,62,68,0.6)",
        borderRadius: 10,

    },

    name: {
        fontWeight: "bold",
        fontSize: 40,
        color: "white"
    },
    episode: {
        color: "white",
        fontSize: 20,
        marginLeft: 10
    },
    air_date: {
        color: "white",
        fontSize: 20,
        marginLeft: 6
    },
    created: {
        color: "white",
        fontSize: 14,
        fontStyle: "italic"
    },
    line: {
        fontWeight: "bold",
        color: "white",
        fontSize: 22,
        marginHorizontal: 5
    },
    character: {
        fontWeight: "bold",
        color: "white",
        fontSize: 26,
    },
    nameContainer: {
        marginTop: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    createdContainer: {
        marginTop: 4,
        marginBottom: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    bottomContainer: {
        margin: 10,
        alignItems: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    characterContainer: {
        margin: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});