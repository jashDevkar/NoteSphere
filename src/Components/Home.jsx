import { View, Text, TouchableOpacity, ScrollView, Image, Animated, Easing } from 'react-native'
import React from 'react'
import { YearList } from '../Data/YearList'
import styles from '../../Style/Styles'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";


const Home = ({ navigation }) => {


  const position = new Animated.ValueXY({ x: 0, y: 120 })
  Animated.spring(position, {
    toValue: { x: 0, y: 0 },
    bounciness:10,
    useNativeDriver: true
  }).start();
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };
  return (

    <ScrollView style={{ backgroundColor: '#F5F5F5' }}>

      <Animated.View style={[styles.container]}>
        {
          YearList.map((item, index) => (
            <TouchableOpacity style={[styles.card,
            {
              transform: [{ translateX: position.x }, { translateY: position.y }]
              ,
            }]} onPress={() => {
              navigation.navigate('Notes', {
                year: item['year'],
                feedBack: options
              })
              ReactNativeHapticFeedback.trigger("effectClick", options);
            }} key={item.id}>
              <Text style={styles.cardText}>{item.title}</Text>
              <Image source={require('../../Assets/Images/right.png')} style={styles.rightArrow} />
            </TouchableOpacity>

          ))
        }
        <TouchableOpacity style={[styles.card2,{transform:[{translateX:position.x},{translateY:position.y}]}]} onPress={() => {
          navigation.navigate('About-Us')
          ReactNativeHapticFeedback.trigger("effectClick", options);
        }} >
          <Text style={styles.cardText}>About Us</Text>
          <Image source={require('../../Assets/Images/right.png')} style={styles.rightArrow} />
        </TouchableOpacity>
      </Animated.View>

    </ScrollView>
  )
}

export default Home