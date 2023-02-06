import { StyleSheet, View, Text, FlatList } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Balance from '../components/Balance';
import Movements from '../components/Movements';
import Actions from '../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto telefone',
    value: '435,11',
    data: '17/09/2015',
    type: 0, //despesas
  },
  {
    id: 2,
    label: 'Pix cliente Gustavo',
    value: '1.835,11',
    data: '05/11/2022',
    type: 1, //receita
  },
  {
    id: 3,
    label: 'Salário',
    value: '10.834,00',
    data: '15/02/2023',
    type: 1, //receita
  },
  {
    id: 4,
    label: 'Renda de aluguel',
    value: '834,00',
    data: '23/07/2022',
    type: 1, //receita
  },
  {
    id: 5,
    label: 'Conta de luz',
    value: '244,73',
    data: '03/07/2023',
    type: 0, //despesa
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Header name={'Guilherme Cavalcante'} />
      <Balance saldo={'45.045,00'} gastos={'-2.565,00'} />
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements movement={item} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
    alignSelf: 'center',
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
