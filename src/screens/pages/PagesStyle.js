
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#a9a9a9",

    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    text: {
        color: "white",
        fontSize: 32
    },
    next: {
        fontSize: 18,
        color: "white",
    },
    firstHeader: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
    },
    secondHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,

    },
    thirdHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    go: {
        borderWidth: 2,
        padding: 5,
        borderColor: "white",
        borderRadius: 25
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    }




});
