import { StatusBar } from 'react-native'
import React from 'react'
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

