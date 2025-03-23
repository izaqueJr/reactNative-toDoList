import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48, 
  },

  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 36,
    gap: 16,
    marginBottom: 42
  },

  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 5,
    color: '#fff',
    padding: 16
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#31cf67",
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

  listEmptyName: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 24
    
  }
});