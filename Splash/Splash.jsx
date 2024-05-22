import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 5 }}>
      <Text style={{ fontSize: 36, color: 'black', fontWeight: 'bold' }}>Notes-Sphere</Text>
      <Text style={{ color: 'black', fontSize: 16 }}>Your ultimate notes provider</Text>
      <View style={styles.loading}>
        <ActivityIndicator color={'black'} />
        <Text style={{color:'black'}}>Loading..</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    bottom: '10%',
    alignItems:'center',
    justifyContent:'center',
    gap:2
  }
})
export default Splash