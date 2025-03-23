import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  empty: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderTopWidth: 1,
    paddingTop: 48,
    borderTopColor: '#333',
  },
  emptyImage: {
    marginBottom: 16
  },
  listEmptyNameTitle: {
    color: "#808080",
    fontSize: 14,
    fontWeight: 700,
    textAlign: 'center',
  },

  listEmptyText: {
    color: "#808080",
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'center',
    marginTop: 8
  },

});