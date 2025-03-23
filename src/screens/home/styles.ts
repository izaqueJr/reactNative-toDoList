import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
     
  },
 

  logoContainer:{
    backgroundColor: '#0D0D0D',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 70,
    paddingBottom: 70
  },
  
  mainContainer:{
    paddingLeft: 24,  
    paddingRight: 24,  
  },
  
  counterContainer:{
      display: 'flex',
      flexDirection: "row",
      justifyContent: 'space-between',
      marginBottom: 16,
  },
  counter:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,  
  },
  counterLabel:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4EA8DE', 
  },
  counterLabelDone:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8284FA', 
        
  },
  counterNumber:{
    backgroundColor: '#333',
    color: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
    fontWeight: 'bold',
    fontSize: 12,
  }
  
});