import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainText: {
        fontSize: 20,
        marginVertical: 20
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 10,
        width: 110,
        alignItems : 'center'
    },
    link:{
        width: 110,
        textAlign: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    outerView: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 50
    },
    innerView: {
        alignItems : 'center'
    }
})