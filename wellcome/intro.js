import React, { Component } from 'react'
import { 
    Text, View, Image, StyleSheet, TextInput,TouchableOpacity

} from 'react-native'


const Intro=({navigation})=>{
    return (
      <View style={styles.container}>
        <Text style={{color: '#e34646', fontWeight: 'bold', fontSize: 20, marginBottom: 50, marginTop: 100}}>WELLCOME</Text>
        <Image
            style={styles.tinyLogo}
            source={require('./img/imagesdongho.png')}
        />
        <TouchableOpacity 
          style={styles.login}
          onPress={()=>{navigation.navigate('Signin')}}
        >
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.singup}
          onPress={()=>{navigation.navigate('Signup')}}  
        >
            <Text style={{color: '#e34646', fontWeight: 'bold'}}>Đăng ký</Text>
        </TouchableOpacity>
       
      </View>
    )
  }
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    tinyLogo: {
        width: 100,
        height: 100,
    },
    
    login:{
        width: 200,
        height: 50,
        backgroundColor: '#e34646',
        borderRadius: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    singup:{
        width: 200,
        height: 50,
        borderColor: '#e34646',
        borderWidth: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
  });
  export default Intro;