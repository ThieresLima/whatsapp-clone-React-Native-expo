import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        margin: 10
    },
    myCalls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
    },

    img: {
        width: 55,
        height: 55,
        borderRadius: 30,
        resizeMode: 'contain',

    },

    info: {
        marginEnd: 120,
        padding: 10,
        marginBottom: 10,
    },


    title: {
        color: '#D4D6D8',
        fontSize: 16,
        fontWeight: 'bold'
    },

    subTitle: {
        color: '#9EA0A2',
        fontWeight: 'bold',
        marginLeft: 10
    },

    video: {
        marginTop: 15,

    },

    icons: {
        marginTop: 250,
        marginLeft: 280,
        alignContent: 'center'
    },

    pencil: {
        backgroundColor: '#313B42',
        width: 55,
        height: 55,
        borderRadius: 30,
        textAlign: 'center',
        padding: 15,
    },

    camera: {
        backgroundColor: '#0CB2A0',
        width: 60,
        height: 60,
        borderRadius: 30,
        textAlign: 'center',
        padding: 15,
        marginTop: 10
    }

});

export default styles;