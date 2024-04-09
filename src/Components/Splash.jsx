import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import { StackActions, useNavigation } from '@react-navigation/native'


const Splash = () => {

    const navigation=useNavigation()
    useEffect(()=>{
        setTimeout(()=>{
            const isSignedIn = async () => {
                const isSignedIn = await GoogleSignin.isSignedIn();
                const user = isSignedIn==true?'BottomNavBar':'SignIn'
                navigation.dispatch(StackActions.replace(user)) 
              };
              isSignedIn()
        },2000)
    },[])

  return (
    <View>
      <Text>Splash</Text>
    </View>
  )
}

export default Splash