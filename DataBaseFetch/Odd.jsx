import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'
import RenderError from './RenderError';
import styles from '../Style/Styles';
import Activity from './FetchingActivity';
import NetInfo from '@react-native-community/netinfo'
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback';

const Odd = ({ navigation }) => {

    const route = useRoute();
    const semType = 'Odd'
    const data = route.params;   //data={param:{year:SE,render:notes}}
    const { param } = data       //{year:SE,render:notes}         
    const [activity, setActivity] = useState(false)
    const [errorMssg, setErrorMssg] = useState(false)
    const [subjectData, setSubjectData] = useState([])
    const [isConnected, setIsConnected] = useState(false)
    const options = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false,
    };

    const checkInternet = async () => {
        const state = await NetInfo.fetch();
        if (state.isConnected == false) {
            setIsConnected(state.isConnected)

        }
        else if (state.isConnected == true) {
            setIsConnected(state.isConnected)
        }
    }

    useEffect(() => {
        try {
            const getData = async () => {
                setActivity(true)
                const snapshot = await firestore().collection('Years').doc(param.year).get();
                const mydata = snapshot.data();
                setActivity(false)
                setSubjectData(mydata[semType]);

            }
            if (!isConnected) {
                checkInternet()
            }
            else {
                getData()
            }
        } catch (error) {
            setErrorMssg(true)
            console.log('error fetching data ', error)
        }

    }, [isConnected])


    const Refresh = (props) => {
        return (
            <View style={styles.errorContainer}>
                <View style={styles.mssgBox}>
                    <Text style={styles.errorTitle}>Oops! Something went wrong...</Text>
                    <Text style={styles.errormssg}>{props.mssg}</Text>
                    <TouchableOpacity onPress={() => checkInternet()} style={styles.button}>
                        <Text style={styles.errorBtnText}>Refresh</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: "#F5F5F5" }}>
            {
                isConnected == false ?
                    <Refresh mssg='No internet connection' />
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
                                                onPress={() => {
                                                    navigation.navigate('Chapters', { subjectName: item, render: param.render, year: param.year })
                                                    RNReactNativeHapticFeedback.trigger("effectClick", options)
                                                }}>
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