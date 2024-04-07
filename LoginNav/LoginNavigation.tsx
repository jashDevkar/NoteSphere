import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signin from '../Google/Signin'
import Navigation from '../src/Navigation/Navigation'

const Stack = createNativeStackNavigator()
const LoginNavigation = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='SignIn' component={Signin} options={{headerShown:false}}/>
        <Stack.Screen name='Navigation' component={Navigation}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default LoginNavigation