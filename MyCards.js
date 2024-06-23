import * as React from 'react';
import {Text, View, StyleSheet } from 'react-native';


export default function MyCards(){
    return(
        <View style={styles.container}>
            <Text>MyCards</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

