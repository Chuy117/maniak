import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    first: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },

    second: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    third: {
        justifyContent: 'flex-end',
        marginBottom: Dimensions.get('window').width * 0.07
    },

    imageLogo: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').height * 0.25
    },

    welcome: {
        color: '#777d8d',
        fontSize: Dimensions.get('window').width * 0.075,
        fontWeight: "bold"
    },

    alineacion: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    iconBar: {
        color: '#777d8d',
    },

    button: {
        borderWidth: 2,
        borderColor: '#777d8d',
        width: Dimensions.get('window').width * 0.12,
        height: Dimensions.get('window').width * 0.12,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },

    text: {
        //color: '#FFF', 
        color: '#777d8d',
        fontSize: 15
    },

    textRegister: {
        color: '#777d8d',
        fontSize: 15
    },

    textRegister2: {
        fontWeight: 'bold',
        fontStyle: 'italic',
    },

    place: {
        borderBottomWidth: 1,
        borderBottomColor: '#777d8d',
        width: Dimensions.get('window').width - 100,
        borderRadius: 10,
        margin: 2,
    },

    espacio: {
        marginBottom: Dimensions.get('window').width * 0.15
    },

    btnEye: {
        position: 'absolute',
        top: 12,
        right: 20,
    },

    orientacion: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonLogin: {
        backgroundColor: '#777d8d',
        height: Dimensions.get('window').width * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    espacio2: {
        margin: Dimensions.get('window').width * 0.15,
    },

    loginText:{
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    },

});

export {

    styles,

}
