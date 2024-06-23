import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDarkMode } from './DarkModeContext';

export default function Home() {
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <View style={styles.welcomeSect}>
        <Image style={styles.profile} source={require('./assets/profile.png')} />
        <View style={styles.nameSect}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.name}>Eric Atsu</Text>
        </View>
        <Ionicons style={styles.search} name="search" size={30} color={isDarkMode ? 'white' : 'grey'} />
      </View>
      
      <Image style={styles.card} source={require('./assets/Card.png')} />
      
      <View style={styles.actionRow}>
        <ActionItem iconName="arrow-up-outline" label="Sent" />
        <ActionItem iconName="arrow-down-outline" label="Receive" />
        <ActionItem iconName="cash-outline" label="Loan" />
        <ActionItem iconName="cloud-upload-outline" label="Topup" />
      </View>
      
      <View style={styles.transText}>
        <Text style={styles.transaction}>Transaction</Text>
        <Text style={styles.sell}>See All</Text>
      </View>
      
      <ScrollView>
        <TransactionItem iconName="logo-apple" name="Apple Store" category="Entertainment" amount="-$5.00" />
        <TransactionItem iconName="logo-amazon" name="Amazon" category="Retail" amount="-$5.00" />
        <TransactionItem iconName="logo-facebook" name="Facebook" category="Social Media" amount="-$4.00" />
        <TransactionItem iconName="logo-microsoft" name="Microsoft" category="Software" amount="-$1.00" />
      </ScrollView>
    </View>
  );
}

function ActionItem({ iconName, label }) {
  const { isDarkMode } = useDarkMode();
  const color = isDarkMode ? 'white' : 'grey';

  return (
    <View style={{ alignItems: 'center' }}>
      <Ionicons name={iconName} size={30} color={color} />
      <Text style={{ color }}>{label}</Text>
    </View>
  );
}

function TransactionItem({ iconName, name, category, amount }) {
  const { isDarkMode } = useDarkMode();
  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.transSect}>
      <View style={styles.iconSect}>
      <Ionicons name={iconName} size={30} color={isDarkMode ? 'white' : 'black'} />
      <View style={styles.nameSect}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.welcomeText}>{category}</Text>
      </View>
      </View>
      <Text style={styles.value}>{amount}</Text>
    </View>
  );
}

const getStyles = (darkMode) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkMode ? '#161622' : '#fff',
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
    fontSize: 12,
    color: darkMode ? '#bbb' : 'grey',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: darkMode ? '#fff' : '#1e1e2d',
  },
  search: {
    marginLeft: 'auto',
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
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginVertical: 25,
  },
  transText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginVertical: 25,
  },
  transaction: {
    fontSize: 20,
    fontWeight: 'bold',
    color: darkMode ? '#fff' : '#1e1e2d',
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
    backgroundColor: darkMode ? '#222' : '#f8f8f8',
    borderRadius: 10,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: darkMode ? '#fff' : '#1e1e2d',
  },
  iconSect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
