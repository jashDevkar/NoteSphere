import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'
import RenderError from './RenderError';
import styles from '../Style/Styles';
import Activity from './FetchingActivity';

const Even = () => {

    const route = useRoute();
    const data = route.params;   //data={param:{year:SE,render:notes}}
    const { param } = data       //{year:SE,render:notes}         
    const [activity, setActivity] = useState(false)
    const [errorMssg, setErrorMssg] = useState(false)
    const navigation = useNavigation();
    const [subjectData, setSubjectData] = useState([])

    useEffect(() => {
        try {
            const getData = async () => {
                setActivity(true)
                const snapshot = await firestore().collection('Years').doc(param.year).get();
                const mydata = snapshot.data();
                setSubjectData(mydata['Even']);
                setActivity(false)
            }
            getData()
        } catch (error) {
            setErrorMssg(true)
            console.log('error fetching data ', error)
        }

    }, [])

    return (
        <View style={{ flex: 1 ,backgroundColor:"#F5F5F5"}}>
            {
                errorMssg ?
                    <RenderError/>
                    :
                    activity ?
                        <Activity/>
                        :
                        <ScrollView>
                            <View style={styles.container}>
                                {
                                    subjectData.map((item, index) =>
                                        <TouchableOpacity key={index} style={styles.card2}
                                            onPress={() => navigation.navigate('Chapters',{ subjectName:item, render:param.render,year:param.year })}>
                                            <Text style={styles.cardText}>{item}</Text>
                                            <Image style={styles.rightArrow} source={require('../Assets/Images/right.png')}/>
                                        </TouchableOpacity>)
                                }
                            </View>
                        </ScrollView>

            }
        </View>
    )
}

export default Even