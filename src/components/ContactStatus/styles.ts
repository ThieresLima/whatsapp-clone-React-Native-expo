import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    statusContainer: {
        flexDirection: 'row',
        padding: 10,
    },

    img: {
        width: 55,
        height: 55,
        borderRadius: 30,
        resizeMode: 'contain',
        borderColor: 'pink',
    },

    info: {
        padding: 10
    },

    title: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 14,
        fontWeight: 'bold'
    },

    subTitle: {
        color: '#9EA0A2',
        fontWeight: 'bold',
    },

    icon: {
        marginTop: -16,
        marginLeft: 40,
        backgroundColor: '#0CB2A0',
        width: 15,
        height: 15,
        borderRadius: 20,
    },

    att: {
        padding: 15
    },

    icons: {
        height: 280,
        alignContent: 'center',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        marginRight: 10,
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