import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../src/Navigation/Navigation';



const Signin = () => {

    const [userInfo, setUserInfo] = useState({})
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: '407616728383-snk0nf7neee6ffvkh6f8qjvmdekseg7i.apps.googleusercontent.com',
        })
    }, [])


    async function onGoogleButtonPress() {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const meta = await GoogleSignin.signIn();
        setUserInfo(meta.user)
        const googleCredential = auth.GoogleAuthProvider.credential(meta.idToken);
        auth().signInWithCredential(googleCredential);
        
        
    }
    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
            setUserInfo({}); //removing user
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => { onGoogleButtonPress() }}>
                <Text>SignIn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { signOut() }}>
                <Text>Signout</Text>
            </TouchableOpacity>
            {userInfo!=null && <Text>{userInfo.name}</Text>}
        </View>
    )
}

export default Signin