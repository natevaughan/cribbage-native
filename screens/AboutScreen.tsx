import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import OpenURLButton from "../components/OpenURLButton";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Cribbage</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <OpenURLButton url="https://github.com/natevaughan">Created by Nate Vaughan</OpenURLButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  body: {
    fontSize: 14
  },
});
