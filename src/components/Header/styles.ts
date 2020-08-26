import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#293742',
        padding: 20,
    },

    header: {
        flexDirection: "row",
        marginTop: 30,
        alignItems: 'center',
        justifyContent: "space-between",
    },

    logo: {
        fontSize: 22,
        color: '#9fa3a7',
        fontWeight: 'bold'
    },

    icons: {
        flexDirection: "row",
        width: 60,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default styles;