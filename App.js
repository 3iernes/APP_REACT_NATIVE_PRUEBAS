import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import { Input, Button } from '@rneui/themed';
import { postUser } from './src/api/pruebasAPI';

export default function App() {
  const [values,setValues]=useState({
    'user':null,
    'password':null
  })

  const handlePress = async()=>{
    try {
      const response = await postUser(values)
      console.log(response.data)
    } catch (error) {
      console.log(`Error posteando datos usuario: ${error.message}`)
    }
  }

  return(
    <View style={styles.container}>
      <Input 
        placeholder='Usuario'
        onChangeText={value => setValues({
          ...values,
          'user':value})}/>
      <Input 
        placeholder='Password'
        secureTextEntry={true}
        onChangeText={value => setValues({
          ...values,
          'password':value})}/>
      <Button title="Solid Button" onPress={handlePress}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
