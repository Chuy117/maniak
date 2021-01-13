import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    panelContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Dimensions.get('window').width,
        flex: 1,
    },

    panelFace: {
        margin: Dimensions.get('window').width * .02,
        height: Dimensions.get('window').width * .5,
        width: Dimensions.get('window').width * .46,
        alignItems: 'center',
        justifyContent: 'center',
    },

    panelImage: {
        aspectRatio: 1,
        zIndex: 1,
        flex: 1,
        borderRadius: 45,
        width: Dimensions.get('window').width * 0.35,
        height: Dimensions.get('window').width * 0.35,
    },

    cargando: {
        fontSize: Dimensions.get('window').height * .035,
        fontWeight: 'bold',
        color: '#FFF',
    },

    linearGradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    instru: {
        fontSize: Dimensions.get('window').height * .02,
        fontWeight: 'bold',
        color: '#777d8d',
        margin: 8,
        alignSelf: 'center'
    },

    instru2: {
        fontSize: Dimensions.get('window').height * .015,
        fontWeight: 'bold',
        color: '#777d8d',
        margin: 8
    }

});

export {

    styles,

}
