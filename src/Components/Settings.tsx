import { View, Text, TouchableOpacity } from 'react-native'
import { GoogleSignin} from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone';
import styles from '../../Style/Styles';

const Settings = () => {

  const [istTime,setIstTime]=useState(null)
  const signOut = async () => {
    try {

      await GoogleSignin.signOut();
      await auth().signOut();


    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    const login = auth().currentUser?.metadata.lastSignInTime
    const istLoginTime = moment(login).tz('Asia/Kolkata').format('HH:mm:ss DD-MM-YYYY');
    setIstTime(istLoginTime)

  })


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10, backgroundColor: '#F5F5F5' }}>
      <Text>{auth().currentUser?.email}</Text>
      <Text>{auth().currentUser?.displayName}</Text>
      <Text>last sign In :{istTime}</Text>
      <TouchableOpacity onPress={signOut} style={styles.signOut}>
        <Text>SignOut</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings