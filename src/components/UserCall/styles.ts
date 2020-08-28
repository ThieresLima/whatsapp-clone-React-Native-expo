import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    myCalls: {
        flexDirection: 'row',
        padding: 10,
    },

    img: {
        width: 60,
        height: 60,
        borderRadius: 30,
        resizeMode: 'contain',
        borderColor: 'pink',

    },

    info: {
        padding: 10,
        marginBottom: 15,
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
        marginLeft: 110,
    },

    icons: {
        marginTop: 230,
        marginLeft: 290,
        alignContent: 'center'
    },

    pencil: {
        backgroundColor: '#313B42',
        width: 60,
        height: 60,
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