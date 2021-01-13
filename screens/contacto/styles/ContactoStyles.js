import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    first: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    photoUser: {
        height: Dimensions.get("screen").width * .42,
        width: Dimensions.get("screen").width * .42,
        borderRadius: 90,
        margin: 10,
    },

    link: {
        height: Dimensions.get('window').width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    fondo: {
        height: Dimensions.get("screen").height * 0.43,
        width: Dimensions.get("screen").width,
    },

    imagePosition: {
        alignItems: 'center',
        justifyContent: 'center',
        top: Dimensions.get("screen").height * 0.08,
    },

    linearGradient: {
        flex: 1
    },

    nombre: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width * 0.065
    },

    third: {
        justifyContent: 'flex-end',
        marginBottom: Dimensions.get('window').width * 0.07
    },

    button: {
        //backgroundColor: '#777d8d',
        borderWidth: 2,
        borderColor: '#777d8d',
        width: Dimensions.get('window').width * 0.12,
        height: Dimensions.get('window').width * 0.12,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },

    iconBar: {
        color: '#777d8d',
    },

    alineacion: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    cv: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width * 0.05,
        textDecorationLine: 'underline',
    },

    position: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width * 0.045,
        textDecorationLine: 'underline',
        fontStyle: 'italic'
    },

    second: {
        flex: 1,
        //alignItems: 'center',
        justifyContent: 'center',
    },

    mitad: {
        width: Dimensions.get('window').width * 0.5,
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },

    titulo: {
        color: '#777d8d',
        fontWeight: 'bold',
        fontSize: Dimensions.get('window').width * 0.075,
        fontStyle: 'italic',
        left: Dimensions.get('window').width * 0.15,
        margin: 5
    },

    text: {
        color: '#777d8d',
        fontSize: Dimensions.get('window').width * 0.045,
        fontStyle: 'italic',
        alignSelf: 'center',
        margin: 5
    },

});

export {

    styles,

}
