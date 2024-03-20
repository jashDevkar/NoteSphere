import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore'
import styles from '../Style/Styles';
import Activity from './FetchingActivity';
import RenderError from './RenderError';

const Odd = () => {
    const route = useRoute();
    const data = route.params;  //data={param:{year:SE,render:notes}}
    const { param } = data      //{year:SE,render:notes}         
    const [activity, setActivity] = useState(false)
    const [errorMssg, setErrorMssg] = useState(false)
    const [subjectData, setMySubjectData] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        try {
            const getData = async () => {
                setActivity(true)
                const snapshot = await firestore().collection('Years').doc(param.year).get();
                const myData = snapshot.data();
                setMySubjectData(myData['Odd']);
                setActivity(false)
            }
            getData()
        } catch (error) {
            setErrorMssg(true)
            console.log('error fetching data ', error)
        }
    }, [])

    return (
        <View style={{ flex: 1 }}>
            {
                errorMssg ?
                    <RenderError />
                    :
                    activity ?
                        <Activity />
                        :
                        <ScrollView>
                            <View style={styles.container}>
                                {
                                    subjectData.map((item, index) =>
                                        <TouchableOpacity key={index} style={styles.card2}
                                            onPress={() => navigation.navigate('Chapters',{ subjectName:item, render:param.render,year:param.year})}>
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