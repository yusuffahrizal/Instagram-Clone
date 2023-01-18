import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Gap, StoryRounded } from './components';
import { FONT } from './themes';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={[styles.fontTest, {fontFamily: FONT.INTER.NORMAL}]}>Ini adalah APP JS</Text>
      <Text style={[styles.fontTest, {fontFamily: FONT.ROBOTO.NORMAL}]}>Ini adalah APP JS</Text>
      <StoryRounded />
      <Gap height={100} />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <StoryRounded />
        <Gap width={100} />
        <StoryRounded />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fontTest: {
  },
  

});

export default App;
