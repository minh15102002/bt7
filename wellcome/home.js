import React, { Component } from 'react'
import { 
    Text, View,Image,StyleSheet,Button,TouchableOpacity

} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home=()=>{
    const logout = async() => {
        await AsyncStorage.removeItem('token')
        navigation.navigate('Login')
    }
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
        <View  style={styles.home}>
          <Text style={{color: '#fff', fontWeight: 'bold'}}>Trang chủ</Text>
          </View>

            {/* <TouchableOpacity style={styles.home}>
               <Text style={{color: '#fff', fontWeight: 'bold'}}>Trang chủ</Text>
            </TouchableOpacity> */}

            
        
        {/* <Image
            style={styles.tinyLogo}
            source={require('./img/imghome.png')}
        /> */}

       <View  style={styles.home}>
        <Button onPress={logout} title="Log out"/>
        </View>
      </View>   
      <TouchableOpacity style={styles.item1} onPress={()=>{navigation.navigate('donghonam')}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>Đồng hồ nam</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item1}>
             <Text style={{color: 'black', fontWeight: 'bold'}}>Đồng hồ nữ</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.item1}>
             <Text style={{color: 'black', fontWeight: 'bold'}}>Đồng hồ đôi</Text>
            </TouchableOpacity>
          
      </View>  
    )
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // flexDirection:'row',
      // alignItems: 'center',
      //   justifyContent: 'center',
    },
    home:{
      width: 200,
      height: 50,
      backgroundColor: '#e34646',
      borderColor: '#e34646',
      borderWidth: 1,
      // borderRadius: 40,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
  },
    text: {
        fontSize: 20,
        color: '#e34646',
        fontWeight: 'bold',
        margin:30
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
    tinyLogo: {
      width: '90%',
      height: '90%',
  },
 item1:{
    width: 200,
    height: 50,
    backgroundColor: '#9e969e',
    borderColor: '#9e969e',
    borderWidth: 1,
    // borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
},
  });
  export default Home;