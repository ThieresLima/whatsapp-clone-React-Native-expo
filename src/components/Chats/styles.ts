import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
    },

    img: {
        width: 50,
        height: 50,
        borderRadius: 30,
        resizeMode: 'contain'
    },

    group: {
        width: 220,
        marginTop: 5,
        marginRight: 20
    },

    groupName: {
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.8)',
        fontWeight: "bold",
    },

    contact: {
        fontSize: 15,
        color: '#9fa3a7'
    },
    info: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    hour: {
        color: '#00AF9C',
        fontSize: 12
    },

    total: {
        fontSize: 10,
        color: '#101D24',
        backgroundColor: '#00AF9C',
        fontWeight: 'bold',
        padding: 4,
        marginTop: 4,
        borderRadius: 10,

    },

})

export default styles;