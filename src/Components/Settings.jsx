import { View, Text, TouchableOpacity, Image } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth';
import React, { useEffect, useState } from 'react'
import styles from '../../Style/Styles';

const Settings = () => {

  const [time, setTime] = useState(null)
  const signOut = async () => {
    try {

      await GoogleSignin.signOut();
      await auth().signOut();

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const login = auth().currentUser?.metadata.lastSignInTime
    setTime(new Date(login).toLocaleString())

  })


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10, backgroundColor: '#F5F5F5' }}>
      <View style={styles.infoCard}>
        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: auth().currentUser.photoURL }} width={100} height={100} borderRadius={50} />
        </View>
        <View gap={5}>
          <Text style={styles.infoTxt}>Name:-  {auth().currentUser?.displayName}</Text>
          <Text style={styles.infoTxt}>Email:-  {auth().currentUser?.email}</Text>
          <Text style={styles.infoTxt}>last sign In :- {time}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>signOut()} style={styles.signOut}>
        <Text style={styles.signOutTxt}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Settings