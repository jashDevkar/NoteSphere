import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import Pdf from 'react-native-pdf'
import RenderError from '../DataBaseFetch/RenderError'

const PdfRender = () => {

  const route = useRoute();
  const data = route.params;
  const { param } = data
  const file_path = param;
  const [loading, setLoading] = useState(false)
  const source = { uri: file_path, cache: false }


  const render = () => {
    return (
      <View>
        <ActivityIndicator size={'large'} color={'#000000'} />
        <Text>Loading...</Text>
      </View>
    )

  }


  const PdfRenderComponent = () => {
    if (file_path != undefined) {
      return (
        <Pdf source={{ uri: file_path, cache: false }}
          style={styles.pdf}
          showsVerticalScrollIndicator
          onError={(error) => console.log(error)}
          trustAllCerts={false}
          renderActivityIndicator={(progress) => render()}
          onLoadComplete={() => console.log('completed')}
        />
      )
    }
    else {
      return (
        <RenderError />
      )
    }
  }


  return (

    <PdfRenderComponent />

  )

}





const styles = StyleSheet.create({
  pdf: {
    flex: 1,
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default PdfRender