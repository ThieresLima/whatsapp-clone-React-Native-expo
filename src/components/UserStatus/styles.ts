import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    myStatus: {
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
        padding: 15
    },

    title: {
        color: '#D4D6D8',
        fontSize: 16,
        fontWeight: 'bold'
    },

    subTitle: {
        color: '#9EA0A2',
        fontWeight: 'bold',
    },

    icon: {
        marginTop: -20,
        marginLeft: 40,
        backgroundColor: '#0CB2A0',
        width: 22,
        height: 22,
        borderRadius: 20,
    },

    att: {
        padding: 20
    },

    icons: {
        marginTop: 100,
        marginLeft: 280,
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