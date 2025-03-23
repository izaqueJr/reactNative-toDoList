import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',

        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#1F1E25',
    },
    name: {
        fontSize: 16,
        flex: 1,
        color: '#FFF',
        paddingLeft: 16,
        paddingRight: 16,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: "#e23c44",
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttonText: {
        color: "#fff",
        fontSize: 24,
        fontWeight: 'bold',
    },
});