// This component exists only to combine images and text
// on the same line, which the "renderRow" function in 
// React doesn't play nice with.

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
	flexWrap: 'wrap'
  },
  text: {
	flex: 1,
    marginLeft: 12,
    fontSize: 16,
	
  },
  photo: {
    height: 50,
    width: 50,
    borderRadius: 20,
  },
});

const Row = (props) => (
  <View style={styles.container}>
    <Image source={{ uri: props.icon_url}} style={styles.photo} />
    <Text style={styles.text}>
      {`${props.title} ${props.fcttext}`}
    </Text>
  </View>
);

export default Row;