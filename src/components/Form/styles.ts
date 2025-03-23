import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
 
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: -30,
    gap: 4,
    marginBottom: 42,
 
  },

  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: '#fff',
    padding: 16,
    borderColor: '#0D0D0D',
    borderWidth: 1,
  },

  button: {
    width: 50,
    height: 50,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },
});