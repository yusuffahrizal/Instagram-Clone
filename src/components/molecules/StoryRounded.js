import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import RoundImage from '../atoms/RoundImage'

const StoryRounded = () => {
  return (
    <LinearGradient 
      start={{x: 0.0, y: 0.25}} 
      end={{x: 0.5, y: 0.8}}
      colors={['rgba(250, 240, 6, 1)', 'rgba(250, 204, 5, 0.94)', 'rgba(255, 0, 0, 0.59)']} 
      style={styles.outerGradient}>
      <View style={styles.innerBorder}>
        <RoundImage uri='https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80' size={63} />
      </View>
    </LinearGradient>
  )
}

export default StoryRounded

const styles = StyleSheet.create({
  outerGradient: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    width: 73,
    height: 73,
    borderRadius: 73/2
  },
  innerBorder: {
    width: 68,
    height: 68,
    borderRadius: 68/2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})