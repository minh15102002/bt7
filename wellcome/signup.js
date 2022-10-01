import React, { Component } from 'react'
import { Text, View , StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native'

const Signup=({navigation})=>{
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
          <Text style={{fontWeight: 'bold', fontSize:20, color:'#e34646', marginHorizontal: 10, marginVertical: 40}}>CREATE NEW ACCOUNT</Text>
        </View>
        <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
            <TextInput
                style={styles.input}
                placeholder='Full Name'
            />
            <TextInput
                style={styles.input}
                placeholder='Phone Number'
            />
            <TextInput
                style={styles.input}
                placeholder='Email Adess'
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.singup}>
                 <Text style={{color: '#fff', fontWeight: 'bold'}}>Sign up</Text>
             </TouchableOpacity>
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
    }
  });
  export default Signup;