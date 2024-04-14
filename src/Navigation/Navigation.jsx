import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../Components/Home';
import Download from '../Components/Download';
import Settings from '../Components/Settings';
import Notes from '../Screens/Notes';
import Subjects from '../Screens/Subjects';
import PdfRender from '../../Pdf/Pdf';
import Chapters from '../Chapters/Chapters';
import UnderConstruction from '../Screens/UnderConstruction';
import About from '../Components/About';
import { useNavigation } from "@react-navigation/native";
import ReactNativeHapticFeedback from "react-native-haptic-feedback"
import { enableScreens } from 'react-native-screens';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNav = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',

            }}>
            <Stack.Screen name='BottomNavBar' component={BottomNav}
                options={{
                    headerShown: false,
                }} />

            <Stack.Screen name='Notes' component={Notes} />
            <Stack.Screen name='Subjects' component={Subjects}
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Image source={require('../../Assets/Images/home.png')} style={styles.homeImg} />
                        </TouchableOpacity>
                    )
                }} />
            <Stack.Screen name='Pdf' component={PdfRender} />
            <Stack.Screen name='Chapters' component={Chapters}
                options={{
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Image source={require('../../Assets/Images/home.png')} style={styles.homeImg} />
                        </TouchableOpacity>
                    )
                }} />
            <Stack.Screen name='Construction' component={UnderConstruction} />
            <Stack.Screen name='About-Us' component={About} />
        </Stack.Navigator>
    )
}


const BottomNav = () => {
    const options = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
      };
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    ...styles.tab
                },
            }}            
        >
            <Tab.Screen name='Home' component={Home}
                options={{
                    headerStyle: {
                        shadowColor: '#000000',
                        
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.image_container}>
                            <Image source={require('../../Assets/Images/home.png')} style={[styles.bottom_image, { tintColor: focused ? 'black' : '#A9A9A9' }]} />
                            {
                                focused ?
                                    <Text style={styles.titleStyle}>Home</Text>
                                    : null
                            }
                        </View>
                    ),
                }} />


            <Tab.Screen name='Downloads' component={Download}
                options={{
                    headerStyle: {
                        shadowColor: '#000000',
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.image_container}>
                            <Image source={require('../../Assets/Images/downloads.png')} style={[styles.bottom_image, { tintColor: focused ? 'black' : '#A9A9A9' }]} />
                            {
                                focused ?
                                    <Text style={styles.titleStyle}>Downloads</Text>
                                    : null
                            }
                        </View>
                    )
                }} />


            <Tab.Screen name='Settings' component={Settings}
                options={{
                    headerStyle: {
                        shadowColor: '#000000',
                        
                    },
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.image_container}>
                            <Image source={require('../../Assets/Images/setting.png')} style={[styles.bottom_image, { tintColor: focused ? 'black' : '#A9A9A9' }]} />
                            {
                                focused ?
                                    <Text style={styles.titleStyle}>Setting</Text>
                                    : null
                            }
                        </View>
                    )
                }} />


        </Tab.Navigator>
    )
}


const Navigation = () => {
    return (
        <StackNav />
    )
}




const styles = StyleSheet.create({
    bottom_image: {
        width: 24,
        height: 24,
    },
    image_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    tab: {
        position: 'absolute',
        bottom: 24,
        left: 24,
        right: 24,
        borderRadius: 32,
        paddingVertical: 0,
        elevation: 24,
        height: 64,
    },
    titleStyle: {
        color: '#000000'
    },
    homeImg: {
        width: 30,
        height: 30,
        tintColor: '#404040'
    }
})


export default Navigation
