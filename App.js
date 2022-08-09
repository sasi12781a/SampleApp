import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
  const [Input,setInput]=useState('');
  if (Input.length==0){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <TextInput
            style={{color: 'black',fontSize: 17,fontWeight: 'bold',borderColor:'black',borderWidth:2,width:'80%'}}
            value={Input}
            onChangeText={setInput}
            autoCompleteType="off"
          />
      </View>
  
    )
  }
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <View
      style={{
        marginTop: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        width:"80%",
        borderRadius: 6,
        borderWidth: 2,
        borderColor:'black',
      }}>
      <Icon
        style={{padding: 15}}
        name="visibility"
        size={30}
        color="black"
      />
      <TextInput
        style={{color: 'black',fontSize: 17,fontWeight: 'bold'}}
        value={Input}
        onChangeText={setInput}
        autoCompleteType="off"
      />
    </View>
  </View>
  )
  
};

export default App;