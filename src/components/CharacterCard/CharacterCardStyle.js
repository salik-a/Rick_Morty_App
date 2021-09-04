
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        borderRadius: 10,
        backgroundColor: "#24282f",
        shadowColor: 'white',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 25

    },
    innerContainer: {
        alignItems: "center",
        justifyContent: "center",
        
    },
    image: {
        width: "100%",
        height: 100,
        borderRadius: 10,
    },
    name: {
        fontSize: 16,
        color: "#f0f8ff"
    },
    nameContainer: {
        alignItems: "center",
        justifyContent: "center",
        margin: 5
    }
    
  
});
