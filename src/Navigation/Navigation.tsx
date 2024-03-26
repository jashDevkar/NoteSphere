import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Components/Home';
import Download from '../Components/Download';
import Settings from '../Components/Settings';
import Notes from '../Screens/Notes';
import Subjects from '../Screens/Subjects';
import PdfRender from '../../Pdf/Pdf';
import Chapters from '../Chapters/Chapters';
import UnderConstruction from '../Screens/UnderConstruction';
import About from '../Components/About';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            gestureEnabled:true,
            gestureDirection:'horizontal',
            
        }}>
            <Stack.Screen name='BottomNavBar' component={BottomNav}
                options={{
                    headerShown: false,
                }} />
            <Stack.Screen name='Notes' component={Notes}/>
            <Stack.Screen name='Subjects' component={Subjects} />
            <Stack.Screen name='Pdf' component={PdfRender} />
            <Stack.Screen name='Chapters' component={Chapters} />
            <Stack.Screen name='Construction' component={UnderConstruction} />
            <Stack.Screen name='About-Us' component={About}/>
        </Stack.Navigator>
    )
}


const BottomNav = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{
                ... styles.tab}
            
        }}
            >
            <Tab.Screen name='Home' component={Home}
                options={{
                    headerStyle:{
                        shadowColor:'#000000',
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
                    )
                }} />


            <Tab.Screen name='Downloads' component={Download}
                options={{
                    headerStyle:{
                        shadowColor:'#000000',
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
                    headerStyle:{
                        shadowColor:'#000000',
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
        <NavigationContainer>
            <StackNav />
        </NavigationContainer>
    )
}




const styles = StyleSheet.create({
    bottom_image: {
        width: 32,
        height: 32,
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
    titleStyle:{
        color:'#000000'
    }
})


export default Navigation
