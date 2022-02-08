import React,{ useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles from '../styles';
import ItemComponent from '../components/ItemComponent';

const HomeScreen = () => {
  const [apiData,setApiData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [isEmpty, setIsEmpty] = useState(true);

  const FetchNewItem = () =>{
    
      const baseUrl = 'https://random-data-api.com/api/food/random_food ';
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

  function removeDuplicate(){
    let noDuplicates = [...new Set(filterData)]
    setFilterData(noDuplicates);
  }
  const searchFilter = e =>{
      if(e){
        console.log(e)
          const Data = apiData.filter((item)=>{
          const itemData = item.dish? item.dish.toUpperCase(): ''.toUpperCase();
          const E = e.toUpperCase();
          return itemData.indexOf(E) > -1;
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
    <View style={styles.root}>
      <StatusBar />
    
      <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', padding: 20}}>
        <View style={styles.search} >
          {/* Search bar */}
          <TextInput
            style={styles.searchStyle}
            value={searchData}
            onChangeText={e=>searchFilter(e)}
            placeholder='Search...'
            placeholderTextColor={'black'}
          />
        </View>
        {/* Add Button */}
        <TouchableOpacity style={styles.button} onPress={e=>{
            FetchNewItem(e)
            setIsEmpty(false); 
            if(!isEmpty){
              removeDuplicate();
            }   
        }}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      {/* List of items */}
      {
      !isEmpty && <FlatList 
        data={filterData}
        keyExtractor={(item)=>item.uid}
        renderItem={({item})=><ItemComponent name = {item} />
      }
      />}
    </View>
  );
};

export default HomeScreen;
