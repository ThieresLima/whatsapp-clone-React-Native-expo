import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 12,
        borderBottomWidth: 0.3,
        borderBottomColor: '#9fa3a7',
    },

    img: {
        width: 50,
        height: 50,
        borderRadius: 30,
        resizeMode: 'contain'
    },

    group: {
        alignItems: 'flex-start',
        marginHorizontal: 15,
        marginTop: 5
    },

    groupName: {
        fontSize: 16,
        color: '#9EA0A2',
        fontWeight: "bold",
    },

    contact: {
        fontSize: 15,
        color: '#9fa3a7'
    },
    info: {
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 15
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
        padding: 5,
        borderRadius: 30,

    }
})

export default styles;