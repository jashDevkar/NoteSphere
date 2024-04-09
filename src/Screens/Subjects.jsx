import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useRoute } from '@react-navigation/native';
import Even from '../../DataBaseFetch/Even';
import Odd from '../../DataBaseFetch/Odd'


const Tab = createBottomTabNavigator();
const Subjects = () => {
    const route = useRoute();
    const data = route.params  //data={year:SE,render:notes}
    // console.log(data) //{render:notes,year:SE}
    return (
        <BottomNav param={data} />
    )
}

const BottomNav = ({param}) => {  //{year: {year:SE}} after disintigration year={year:SE}

    // console.log(param)  //{Year:SE,render:notes}

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle:{
                    ... styles.tab
                }
            
            }}>
            <Tab.Screen name='Odd Sem' component={Odd}
                initialParams={
                    {
                        param: param  // {param:{year:SE,render:notes}}
                    }
                }
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.image_container}>
                            <Image source={require('../../Assets/Images/book.png')} style={[styles.bottom_image, { tintColor: focused ? 'black' : '#A9A9A9' }]} />
                            {
                                focused ?
                                    <Text style={styles.titleStyle}>Odd Sem</Text>
                                    :
                                    null
                            }
                        </View>
                    )
                }}
            />
            <Tab.Screen name='Even Sem' component={Even}
                initialParams={
                    {
                        param: param   //{param:{year:SE,render:notes}}
                    }
                }
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.image_container}>
                            <Image source={require('../../Assets/Images/book.png')} style={[styles.bottom_image, { tintColor: focused ? 'black' : '#A9A9A9' }]} />
                            {
                                focused ?
                                    <Text style={styles.titleStyle}>Even Sem</Text>
                                    :
                                    null
                            }
                        </View>
                    )
                }}
            />
        </Tab.Navigator>
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
    titleStyle: {
        color: '#000000'
    }
})

export default Subjects