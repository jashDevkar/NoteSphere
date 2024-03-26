import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore'
import styles from '../../Style/Styles'
import Activity from '../../DataBaseFetch/FetchingActivity'
import RenderError from '../../DataBaseFetch/RenderError'


const Chapters = ({ navigation }) => {
    const route = useRoute();
    const data = route.params;  //{data:{subjectName:subjectname,render:Notes,year:SE}}
    const [pdfData, setPdfData] = useState([])
    const [activity, setActivity] = useState(false)
    const [errorMssg, setErrorMssg] = useState(false)

    useEffect(() => {
        try {
            setActivity(true)
            const getData = async () => {
                const snapshot = await firestore().collection(data.render).doc(data.year).collection(data.subjectName).get();   //will render Pdf
                const doccument = snapshot.docs.map(doc => doc.data())
                setPdfData(doccument)
                setActivity(false)

            }
            getData()

        } catch (error) {
            console.log("Error fetching in data ", error);
            setErrorMssg(true)
        }
    }, [])



    return (
        <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            {
                errorMssg ?
                    <RenderError />
                    :
                    activity ?
                        <Activity />
                        :
                        pdfData.length == 0 ?
                            <RenderError />
                            :
                            <ScrollView style={{ backgroundColor: '#f5f5f5' }}>
                                <View style={styles.container}>
                                    {
                                        pdfData.map((item, index) => (
                                            <TouchableOpacity key={index} onPress={() => navigation.navigate('Pdf', { param: item['File_path'] })} style={styles.card2}>
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