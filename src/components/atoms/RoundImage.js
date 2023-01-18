import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

const RoundImage = ({ uri = '', size = 24 }) => {
  return (
    <Image source={{ uri: uri }} style={styles.image(size)} />
  )
}

export default RoundImage

const styles = StyleSheet.create({
  image: (size) => ({
    width: size,
    height: size,
    borderRadius: size/2
  })
})