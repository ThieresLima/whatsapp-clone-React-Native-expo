import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    status: {
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
        padding: 10,
    },

    name: {
        color: '#D4D6D8',
        fontSize: 14,
        fontWeight: 'bold'
    },

    subTitle: {
        color: '#9EA0A2',
        fontWeight: 'bold',
    },

    icon: {
        marginTop: 15,
        marginLeft: 150

    },
});

export default styles;