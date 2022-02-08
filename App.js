/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';



const App = () => {

  

  const [apiData,setApiData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);


 const ItemComponent = ({name}) =>{

  return (
    <View style={styles.item}>
      <Text style={styles.itemName}>{name.brand}</Text>
    </View>
  )
 } 

  const FetchNewItem = () =>{
    
      const baseUrl = 'https://random-data-api.com/api/beer/random_beer ';
      try {
        fetch(baseUrl)
          .then(response => response.json())
          .then(responseJson => {
            console.log(responseJson)
            setApiData([...apiData,responseJson]);
            setFilterData([...filterData,responseJson]);
          });
      } catch (err) {
        console.log('err', err);
      }
  }

  const searchFilter = e =>{
      if(e){
        console.log(e)
          const Data = apiData.filter((item)=>{
          const itemData = item.brand? item.brand.toUpperCase(): ''.toUpperCase();
          const eData = e.toUpperCase();
          return itemData.indexOf(eData) > -1;
        })
        setFilterData(Data);
        setSearchData(e)
      }
      else{
        setFilterData(apiData);
        setSearchData(e)
      }
  }

  return (
    <View >
      <StatusBar />

      <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>
        <View style={styles.search} >
          <TextInput
            style={styles.searchStyle}
            value={searchData}
            onChangeText={e=>searchFilter(e)}
            placeholder='Search...'
            placeholderTextColor={'black'}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={e=>{
            FetchNewItem(e)
            setIsEmpty(false);    
        }}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      {!isEmpty && <FlatList 
        data={filterData}
        keyExtractor={(item)=>item.uid}
        renderItem={({item})=><ItemComponent name = {item} />}
      />}
      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  search:{
    height: 50,
    backgroundColor: 'white',
    width: '85%',
    paddingHorizontal: 10,
    borderRadius: 10
  },
  searchStyle:{
    fontSize: 25,
    color: 'black'
  },
  button:{
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    width: '12%',
    color:'black',
    alignItems: 'center'
  },
  buttonText:{
    fontSize: 30,
    color: 'black',
  },
  item:{
    backgroundColor: 'white',
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
});

export default App;
