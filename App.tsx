import { StatusBar, View } from 'react-native'
import React from 'react'
import Navigation from './src/Navigation/Navigation'
import { NavigationContainer } from '@react-navigation/native'
import {  SafeAreaProvider } from 'react-native-safe-area-context'
import LoginNavigation from './LoginNav/LoginNavigation'


const App = () => {

  

  return (
    <SafeAreaProvider>
      <StatusBar backgroundColor={'black'}/>
      <LoginNavigation/>
    </SafeAreaProvider>
    
  )
}

export default App



