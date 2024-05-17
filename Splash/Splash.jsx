import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center',gap:5}}>
      <Text style={{fontSize:36,color:'black',fontWeight:'bold'}}>Notes-Sphere</Text>
      <Text style={{color:'black',fontSize:16}}>Your ultimate notes provider</Text>
      <View style={{display:'flex', flexDirection:'row',justifyContent:'center',alignItems:'center',gap:10,marginTop:10}}>
        <Text style={{color:'black'}}>Fetching...</Text>
      <ActivityIndicator color={'black'}/>
      </View>
    </View>
  )
}

export default Splash