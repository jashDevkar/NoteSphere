import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'
import RenderError from './RenderError';
import styles from '../Style/Styles';
import Activity from './FetchingActivity';
import NetInfo from '@react-native-community/netinfo'

const Odd = ({ navigation }) => {

    const route = useRoute();
    const semType = 'Odd'
    const data = route.params;   //data={param:{year:SE,render:notes}}
    const { param } = data       //{year:SE,render:notes}         
    const [activity, setActivity] = useState(false)
    const [errorMssg, setErrorMssg] = useState(false)
    const [subjectData, setSubjectData] = useState([])
    const [isConnected, setIsConnected] = useState(false)

    useEffect(() => {
        try {
            const getData = async () => {
                setActivity(true)
                const snapshot = await firestore().collection('Years').doc(param.year).get();
                const mydata = snapshot.data();
                setActivity(false)
                setSubjectData(mydata[semType]);
                
            }
            const checkInternet = async () => {
                const state = await NetInfo.fetch();
                if (state.isConnected == false) {
                    setIsConnected(state.isConnected)
                    return false
                }
                else if (state.isConnected == true) {
                    setIsConnected(state.isConnected)
                    return true
                }
            };
            // const checkInternet = NetInfo.addEventListener((state) => {
            //     if (state.isConnected == false) {
            //         console.log('not connected')
            //         setIsConnected(state.isConnected)
            //         return false
            //     }
            //     else if (state.isConnected == true) {
            //         console.log('connected')
            //         setIsConnected(state.isConnected)
            //         return true
            //     }
            // })
            if (checkInternet()) {
                getData()
            }
        } catch (error) {
            setErrorMssg(true)
            console.log('error fetching data ', error)
        }

    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
            {
                isConnected == false ?
                    <RenderError mssg={'No internet connection'} homeState = {true} />
                    :
                    errorMssg ?
                        <RenderError mssg={'There was an error in fetching data'} />
                        :
                        activity ?
                            <Activity />
                            :
                            <ScrollView>
                                <View style={styles.container}>
                                    {
                                        subjectData.map((item, index) =>
                                            <TouchableOpacity key={index} style={styles.card2}
                                                onPress={() => navigation.navigate('Chapters', { subjectName: item, render: param.render, year: param.year })}>
                                                <Text style={styles.cardText}>{item}</Text>
                                                <Image style={styles.rightArrow} source={require('../Assets/Images/right.png')} />
                                            </TouchableOpacity>)
                                    }
                                </View>
                            </ScrollView>

            }
        </View>
    )
}

export default Odd