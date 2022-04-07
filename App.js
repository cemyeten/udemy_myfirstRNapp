/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
 
  return (
    <SafeAreaView style={styles.background}>
      <Text onPress={()=> console.log("Hello fellas!")}>"Hello fellas!"</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background:{
    flex:1,
    background:'#f5f5f5',
  },
});

export default App;
