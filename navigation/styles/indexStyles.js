import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    imageLogo: {
        width: Dimensions.get('window').width * 0.035,
        height: Dimensions.get('window').height * 0.035,
        aspectRatio: 1,
        marginLeft: 15
    },

    centrar: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },

    text: {
        color: '#FFF',
        fontSize: 15
    },

    alinear: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 15
    },

    marginIcon: {
        marginRight: 15,
    }

});

export {

    styles,

}
