import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: '#262626',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,

        gap: 16,
        // Sombra (box-shadow em React Native)
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.06,
        shadowRadius: 8,
        elevation: 2, 
        padding: 12, 
      },
      
    text: {
        fontSize: 14,
        flex: 1,
        color: '#FFF',
        lineHeight: 20,
    },
    textDone: {
        textDecorationLine: 'line-through',
        fontSize: 14,
        flex: 1,
        color: '#808080',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

 
});