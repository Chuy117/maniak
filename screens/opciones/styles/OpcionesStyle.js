import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    PanelUser: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },

    photoUser: {
        height: Dimensions.get("screen").width * .3,
        width: Dimensions.get("screen").width * .3,
        borderRadius: 60,
        alignSelf: 'center',
        marginBottom: 20
    },

    OptionPart: {
        flexDirection: 'row',
        alignItems: 'center',
        width: Dimensions.get("screen").width * .8,
        height: Dimensions.get("screen").height * .07,
        margin: Dimensions.get("screen").width * .02,
        backgroundColor: '#FFF',
        borderColor: '#777d8d',
        borderWidth: 2,
        alignSelf: 'center',
        borderRadius: 25
    },

    textOption: {
        fontSize: Dimensions.get("screen").width * .06,
        marginLeft: Dimensions.get("screen").width * .025,
        color: '#777d8d',
        fontWeight: 'bold',
    },

    icon: {
        marginLeft: Dimensions.get("screen").width * 0.2
    },

});

export {

    styles,

}
