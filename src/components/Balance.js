import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { MotiView } from 'moti';

const Balance = ({ gastos, saldo }) => {
  return (
    <MotiView
      style={styles.container}
      from={{ rotateX: '-100deg', opacity: 0 }}
      animate={{ rotateX: '0deg', opacity: 1 }}
      transition={{ type: 'timing', duration: 1500, delay: 300 }}
    >
      <View styles={styles.item}>
        <Text style={styles.itemTitle}> Saldo </Text>
        <View style={styles.content}>
          <Text style={styles.currencySimbol}>R$</Text>
          <Text style={styles.balance}>{saldo}</Text>
        </View>
      </View>

      <View styles={styles.item}>
        <Text style={styles.itemTitle}> Gastos </Text>
        <View style={styles.content}>
          <Text style={styles.currencySimbol}>R$</Text>
          <Text style={styles.expenses}>{gastos}</Text>
        </View>
      </View>
    </MotiView>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 18,
    paddingEnd: 18,
    marginTop: -24,
    marginStart: 14,
    marginEnd: 14,
    borderRadius: 4,
    paddingTop: 22,
    paddingBottom: 22,
    zIndex: 99,
  },
  item: {},
  itemTitle: {
    fontSize: 20,
    color: '#DADADA',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  currencySimbol: {
    color: '#DADADA',
    marginRight: 6,
  },
  balance: {
    fontSize: 22,
    color: '#2acc71',
  },
  expenses: {
    fontSize: 22,
    color: '#e74c3c',
  },
});
