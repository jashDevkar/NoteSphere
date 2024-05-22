import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Notes from '../Screens/Notes';
import Subjects from '../Screens/Subjects';
import PdfRender from '../../Pdf/Pdf';
import Chapters from '../Chapters/Chapters';
import UnderConstruction from '../Screens/UnderConstruction';
import About from '../Components/About';
import { useNavigation } from "@react-navigation/native";
import { TabBarScreens } from '../Data/YearList';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator()

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
                    headerTitle: 'Notes Sphere',
                    headerTitleStyle: {
                        color: 'black',
                        fontWeight: '400',
                        fontFamily: 'Roboto-Regular',

                    },
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

    return (
        <Tab.Navigator tabBarPosition='bottom'
            headerShown={true}

            screenOptions={({ route }) => ({
                // tabBarShowLabel: false,
                tabBarStyle: {
                    ...styles.tab,
                },
                tabBarLabelStyle: {
                    color: 'grey',
                },
                tabBarLabel: ({ focused }) => (
                    <Text style={{ fontSize: 12, color: focused ? 'black' : '#A9A9A9' }}>
                        {route.name}
                    </Text>
                ),
                tabBarIndicatorStyle: {
                    height: 0,
                }
            })}
        >
            {
                TabBarScreens.map((item, index) => (
                    <Tab.Screen name={item.name} component={item.comp} key={index}

                        options={{
                            tabBarIcon: ({ focused }) => (
                                <Image source={item.icon}
                                    style={[styles.bottom_image, { tintColor: focused ? 'black' : '#A9A9A9' }]} />

                            ),
                        }}
                    />
                ))
            }


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
    tab: {
        position: 'absolute',
        bottom: 24,
        left: 24,
        right: 24,
        borderRadius: 32,
        paddingVertical:'0.5%',
        elevation: 4,
        height:60,

    },
    homeImg:{
        height:24,
        width:24
    }
})


export default Navigation
