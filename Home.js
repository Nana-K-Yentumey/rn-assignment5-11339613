import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
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
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 22, marginVertical: 25}}>
      <View style={{flexDirection: 'column'}}>
        <Ionicons style={styles.up} name="arrow-up-outline" size={30} color="grey" />
        <Text style={{}}>Sent</Text>
      </View>
      <View style={{flexDirection: 'column'}}>
        <Ionicons style={styles.down} name="arrow-down-outline" size={30} color="grey" />
        <Text style={{}}>Recieve</Text>
      </View>
      <View style={{flexDirection: 'column'}}>
        <Ionicons style={styles.dollar} name="cash-outline" size={30} color="grey" />
        <Text>Loan</Text>
      </View>
      <View style={{flexDirection: 'column'}}>
        <Ionicons style={styles.cloud} name="cloud-upload-outline" size={30} color="grey" />
        <Text>Topup</Text>
        </View>
      </View>
      <View style={styles.transText}>
        <Text style={styles.transaction}>Transaction</Text>
        <Text style={styles.sell}>Sell All</Text>
      </View>
      <ScrollView>
      <View style={styles.transSect}>
        <Ionicons name="logo-apple" size={30} />
        <View style={styles.nameSect}>
          <Text style={styles.name}>Apple Store</Text>
          <Text style={styles.welcomeText}>Entertainment</Text>
        </View>
        <Text style={{color: '#1e1e2d', fontWeight: 'bold', fontSize: 20, marginLeft: 100 }}>-$5.00</Text>
      </View>
      <View style={styles.transSect}>
        <Ionicons name="logo-amazon" size={30} />
        <View style={styles.nameSect}>
          <Text style={styles.name}>Amazon</Text>
          <Text style={styles.welcomeText}>Retail</Text>
        </View>
        <Text style={{color: '#1e1e2d', fontWeight: 'bold', fontSize: 20, marginLeft: 100}}>-$5.00</Text>
      </View>
      <View style={styles.transSect}>
        <Ionicons name="logo-facebook" size={30} />
        <View style={styles.nameSect}>
          <Text style={styles.name}>Facebook</Text>
          <Text style={styles.welcomeText}>Social Media</Text>
        </View>
        <Text style={{color: '#1e1e2d', fontWeight: 'bold', fontSize: 20, marginLeft: 100}}>-$4.00</Text>
      </View>
      <View style={styles.transSect}>
        <Ionicons name="logo-microsoft" size={30} />
        <View style={styles.nameSect}>
          <Text style={styles.name}>Microsoft</Text>
          <Text style={styles.welcomeText}>Software</Text>
        </View>
        <Text style={{color: '#1e1e2d', fontWeight: 'bold', fontSize: 20, marginLeft: 100}}>-$1.00</Text>
      </View>

      </ScrollView>
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

  card: {
    marginLeft: 13,
    marginTop: 10,
  },

  down: {
    marginLeft: 10,
  },

  cloud:{
    marginLeft: 5,
  },

  transText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginVertical: 25,
  },

  transaction: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e1e2d',
  },

  sell: {
    fontSize: 17,
    color: '#0066ff',
    fontWeight: 'bold',
  },

  transSect: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    marginTop: 1,
    justifyContent: 'space-between',
  }

});