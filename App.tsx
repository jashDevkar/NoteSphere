import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/Navigation/Navigation'
import {  SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={'black'}/>
      <Navigation />
    </SafeAreaProvider>
  )
}

export default App

