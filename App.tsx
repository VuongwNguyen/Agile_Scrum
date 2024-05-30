import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RegisterScreen from './src/RegisterScreen'
import LoginScreen from './src/LoginScreen'

const App = () => {
  return (
    <View style={styles.container}>
      {/* <RegisterScreen/> */}
      <LoginScreen/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
})