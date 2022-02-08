import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

const ItemComponent = ({name}) =>{

  return (
    <View style={styles.item}>
      <Text style={styles.itemName}>{name.dish}</Text>
    </View>
  )
 } 

export default ItemComponent;
