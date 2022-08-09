import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const App = () => {
  const [Input,setInput]=useState('');
  const [secure,setSecure] =useState(true);
  const [focus,setFocus]=useState(false);

  const Focus=()=>{
    setFocus(!focus)
  }

  const SecureText=()=>{
    setSecure(!secure)
  }

  if (Input.length==0){
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <TextInput
            style={{color: 'black',fontSize: 17,fontWeight: 'bold',borderColor:'black',borderWidth:2,width:'80%'}}
            value={Input}
            onChangeText={setInput}
            secureTextEntry={true}
            autoCompleteType="off"
            autoFocus={true}
            onFocus={Focus}
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
      <TouchableOpacity onPress={SecureText}>
        <Icon style={{padding: 15}} name={secure ? 'eye-off-outline' : "eye-outline"} size={30} color='#000' />
      </TouchableOpacity>
      <TextInput
        style={{color: 'black',fontSize: 17,fontWeight: 'bold'}}
        value={Input}
        onChangeText={setInput}
        secureTextEntry={secure}
        autoCompleteType="off"
        autoFocus={true}
      />
    </View>
  </View>
  )
  
};

export default App;