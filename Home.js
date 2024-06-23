import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeSect}>
        <Image style={styles.profile} source={require('./assets/profile.png')}/>
        <View style={styles.nameSect}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.name}>Eric Atsu</Text>
        </View>
        <Ionicons style={styles.search} name="search" size={30} color="grey" />
      </View>
      <Image style={styles.card} source={require('./assets/Card.png')}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  welcomeSect: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    marginTop: 50,
  
  },

  nameSect: {
    marginLeft: 20,
  },

  welcomeText: {
    fontSize: 17,
    color: 'grey',

  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e1e2d',
  },

  search: {
    marginLeft: 100,
    width: 40,
    height: 40,
  },

  profile: {
    width: 60,
    height: 60,
  },
});