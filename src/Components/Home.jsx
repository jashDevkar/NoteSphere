import { View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import React from 'react'
import { YearList } from '../Data/YearList'
import styles from '../../Style/Styles'

const Home = ({ navigation }) => {
  return (

    <ScrollView style={{backgroundColor:'#F5F5F5'}}>
      
        <View style={styles.container}>
          {
            YearList.map((item, index) => (
              <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Notes', {
                year: item['year']
              })} key={item.id}>
                <Text style={styles.cardText}>{item.title}</Text>
                <Image source={require('../../Assets/Images/right.png')} style={styles.rightArrow} />
              </TouchableOpacity>

            ))
          }
          <TouchableOpacity style={styles.card2} onPress={()=>navigation.navigate('About-Us')} >
                <Text style={styles.cardText}>About Us</Text>
                <Image source={require('../../Assets/Images/right.png')} style={styles.rightArrow} />
              </TouchableOpacity>
        </View>
      
    </ScrollView>
  )
}

export default Home