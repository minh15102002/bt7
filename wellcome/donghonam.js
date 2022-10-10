import React, { Component } from 'react'
import { 
    Text, View, Image, StyleSheet, TextInput,TouchableOpacity

} from 'react-native'


const Idonghonam=({navigation})=>{
    return (
      <View style={styles.container}>
        <Text style={{color: '#e34646', fontWeight: 'bold', fontSize: 20, marginBottom: 50, marginTop: 100}}>WELLCOME</Text>
        <Image
            style={styles.tinyLogo}
            source={require('./img/dhnam.png')}
        />
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
});
export default donghonam;
