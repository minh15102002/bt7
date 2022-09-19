import React, { Component } from 'react'
import { 
    Text, View, Image, StyleSheet, TextInput, TouchableOpacity

} from 'react-native'
// import { TouchableOpacity } from 'react-native-web';

export default class Intro extends Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={styles.container}>
        <Text style={{color: '#5FDFFA', fontWeight: 'bold', fontSize: 20, marginBottom: 50, marginTop: 100}}>WELLCOME TO MY APP</Text>
        <Image
            style={styles.tinyLogo}
            source={require('./img/brg.png')}
        />
        <TouchableOpacity 
          style={styles.login}
          onPress={()=>{navigation.navigate('Signin')}}
        >
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.singup}
          onPress={()=>{navigation.navigate('Signup')}}  
        >
            <Text style={{color: '#5FDFFA', fontWeight: 'bold'}}>Sign up</Text>
        </TouchableOpacity>
      </View>
    )
  }
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
        backgroundColor: '#5FDFFA',
        borderRadius: 40,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    singup:{
        width: 200,
        height: 50,
        borderColor: '#5FDFFA',
        borderWidth: 1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
  });