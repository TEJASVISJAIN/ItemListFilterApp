import { StyleSheet } from 'react-native';

const colors= {
  background: '#395B64',
  off_white: '#F5F2E7',
  blue: '#2666CF',
  dark: '#2C3333'
}

export default StyleSheet.create({
  root:{
    flex: 1,
    backgroundColor: colors.background
  },
  search:{
    height: 50,
    backgroundColor: colors.off_white,
    width: '85%',
    paddingHorizontal: 10,
    borderRadius: 10
  },
  searchStyle:{
    fontSize: 25,
    color: colors.blue,
    fontWeight: 'bold'
  },
  button:{
    padding: 5,
    backgroundColor: colors.dark,
    borderRadius: 10,
    height: 50,
    width: '12%',
    color:'black',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 30,
    color: colors.off_white,
  },
  item:{
    backgroundColor: colors.off_white,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20
  },
  itemName:{
    fontSize: 25,
    color: 'black'
  }
})