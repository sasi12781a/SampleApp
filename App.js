import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

function App() {
  const [Input, setInput] = useState('');
  const [pass, setPass] = useState('');
  const [secure, setSecure] = useState(true);
  const [focus, setFocus] = useState(false);
  const [e, setE] = useState(false);

  function Focus() {
    setFocus(!focus);
  }

  function Ef() {
    setE(!e);
  }

  function SecureText() {
    setSecure(!secure);
  }

  if (Input.length == 0 && pass.length == 0) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TextInput
          style={{ margin: 20, color: 'black', fontSize: 17, fontWeight: 'bold', borderColor: 'black', borderWidth: 2, width: '80%' }}
          value={Input}
          onChangeText={setInput}
          secureTextEntry={true}
          autoCompleteType="off"
          autoFocus={e}
          placeholder='Email'
          onFocus={Ef} />
        <TextInput
          style={{ color: 'black', fontSize: 17, fontWeight: 'bold', borderColor: 'black', borderWidth: 2, width: '80%' }}
          value={pass}
          onChangeText={setPass}
          secureTextEntry={true}
          autoCompleteType="off"
          autoFocus={focus}
          placeholder='Password'
          onFocus={Focus} />
      </View>


    );
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          marginTop: 10,
          backgroundColor: 'white',
          flexDirection: 'row',
          width: "80%",
          borderRadius: 6,
          borderWidth: 2,
          borderColor: 'black',
        }}>
        <Icon style={{ padding: 15 }} name='mail-outline' size={30} color='#000' />
        <TextInput
          style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}
          value={Input}
          onChangeText={setInput}
          autoCompleteType="off"
          autoFocus={e}
          placeholder='Email'
          onFocus={Ef} />
      </View>

      <View
        style={{
          marginTop: 10,
          backgroundColor: 'white',
          flexDirection: 'row',
          width: "80%",
          borderRadius: 6,
          borderWidth: 2,
          borderColor: 'black',
        }}>
        <TouchableOpacity onPress={SecureText}>
          <Icon style={{ padding: 15 }} name={secure ? 'eye-off-outline' : "eye-outline"} size={30} color='#000' />
        </TouchableOpacity>
        <TextInput
          style={{ color: 'black', fontSize: 17, fontWeight: 'bold' }}
          value={pass}
          onChangeText={setPass}
          secureTextEntry={secure}
          placeholder='Password'
          autoCompleteType="off"
          autoFocus={focus}
          onFocus={Focus} />
      </View>
    </View>
  );

}

export default App;