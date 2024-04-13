import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Navigation from '../src/Navigation/Navigation'
import auth from '@react-native-firebase/auth';
import Signin from '../Google/Signin'
import Activity from '../DataBaseFetch/FetchingActivity';


const Stack = createNativeStackNavigator()
const Main = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(currentUser =>setUser(currentUser));
        setLoading(false);
        return subscriber;
    }, []);

    if (loading) {
        return (
            <Activity />
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {
                    user ? <Stack.Screen name='MainComp' component={Navigation} options={{ headerShown: false }} />
                        :
                        <Stack.Screen name='Signin' component={Signin} />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main