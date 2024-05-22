import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import styles from '../../Style/Styles'
import Activity from '../../DataBaseFetch/FetchingActivity'
import RenderError from '../../DataBaseFetch/RenderError'
import NetInfo from '@react-native-community/netinfo'
import RNReactNativeHapticFeedback from 'react-native-haptic-feedback'


const Chapters = ({ navigation }) => {
    const route = useRoute();
    const mssg = 'No data available'
    const data = route.params;  //{data:{subjectName:subjectname,render:Notes,year:SE}}
    const [pdfData, setPdfData] = useState([])
    const [activity, setActivity] = useState(false)
    const [errorMssg, setErrorMssg] = useState(false)
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
            setActivity(true)
            const getData = async () => {
                const snapshot = await firestore().collection(data.render).doc(data.year).collection(data.subjectName).get();   //will render Pdf
                const doccument = snapshot.docs.map(doc => doc.data())
                setPdfData(doccument)
                setActivity(false)

            }
            if (!isConnected) {
                checkInternet()
            }
            if (isConnected){
                getData()
            }

        } catch (error) {
            console.log("Error fetching in data ", error);
            setErrorMssg(true)
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
        <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
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
                            pdfData.length === 0 ?
                                <RenderError mssg={mssg} homeState={false} />
                                :
                                <ScrollView style={{ backgroundColor: '#f5f5f5' }}>
                                    <View style={styles.container}>
                                        {
                                            pdfData.map((item, index) => (
                                                <TouchableOpacity key={index} onPress={() => {
                                                    navigation.navigate('Pdf', { param: item['File_path'] })
                                                    RNReactNativeHapticFeedback.trigger("effectClick", options)
                                                }} style={styles.card2}>
                                                    <Text style={styles.cardText}>{item['Name']}</Text>
                                                    <Image source={require('../../Assets/Images/right.png')} style={styles.rightArrow} />
                                                </TouchableOpacity>
                                            ))
                                        }
                                    </View>
                                </ScrollView>
            }
        </View>
    )
}



export default Chapters