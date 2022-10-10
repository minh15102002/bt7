import React, { useState } from 'react';
import { Text, View , StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Signin=({navigation})=>{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(null)

  const onSubmit = async() => {
      await AsyncStorage.setItem('token', username)
      if (username === 'minh' && password === '2002') {
          navigation.navigate('Home')
      }
  }
  const tokenlogin = async() => {
    const value = await AsyncStorage.getItem('token')
    if (value !== null) {
        navigation.navigate('Home')
    }
}
tokenlogin()
    return (
      <View style={ styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={()=>{navigation.goBack()}}
          >
            <Image
              source={require('./img/backicon1.png')}
              style={{width: 20, height: 20,marginHorizontal:10, marginVertical: 45}}
            />
          </TouchableOpacity>
          <Text style={{fontWeight: 'bold', fontSize:20, color:'#e34646', marginHorizontal: 10, marginVertical: 40}}>Đăng nhập</Text>
        </View>
        
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <TextInput
                style={styles.input}
                placeholder='Tên đăng nhập'
                onChangeText={(value) => setUsername(value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Mật khẩu'
                secureTextEntry onChangeText={(value) => setPassword(value)}
            />
            <TouchableOpacity style={styles.singup} onPress={onSubmit}>
                 <Text style={{color: '#fff', fontWeight: 'bold'}}>Đăng nhập</Text>
             </TouchableOpacity>
            <Text  style={{marginVertical: 50}}>Hoặc</Text>
            <View style={{flexDirection: 'row'}} >
            <TouchableOpacity style={styles.singupf}>
                 <Text style={{color: '#fff', fontWeight: 'bold'}}>f</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.singupt}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>t</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.singupg}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>G</Text>
            </TouchableOpacity>
           
            </View>
        </View>
        
      </View>
    )
  }



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
    },
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: 'gray',
        borderRadius: 100,
        width: '80%'
    },
    singup:{
        width: 200,
        height: 50,
        backgroundColor: '#e34646',
        borderColor: '#e34646',
        borderWidth: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    singupf:{
      width: 30,
      height: 30,
      backgroundColor: '#304adb',
      borderColor: '#304adb',
      borderWidth: 1,
      borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginLeft:10,
  },
  singupt:{
    width: 30,
    height: 30,
    backgroundColor: '#a3cee6',
    borderColor: '#a3cee6',
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft:10,
},
singupg:{
  width: 30,
  height: 30,
  backgroundColor: '#f23913',
  borderColor: '#f23913',
  borderWidth: 1,
  borderRadius: 40,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
  marginLeft:10,
},

  });
  export default Signin;