import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import Pdf from 'react-native-pdf'
import RenderError from '../DataBaseFetch/RenderError'
import Activity from '../DataBaseFetch/FetchingActivity'

const PdfRender = () => {

  const route = useRoute();
  const data = route.params;
  const { param } = data
  const file_path = param;
  const source = { uri: file_path, cache: false }

  const PdfRenderComponent = () => {
    if (file_path != undefined) {
      return (
        <Pdf source={source}
          style={styles.pdf}
          showsVerticalScrollIndicator
          onError={(error) => console.log(error)}
          trustAllCerts={false}
          renderActivityIndicator={(progress) => <Activity/>}
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