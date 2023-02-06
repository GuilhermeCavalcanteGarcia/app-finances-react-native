import React from 'react';
import { View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { MotiView, MotiText } from 'moti';
// Retornando o tamnanho da StatusBar para manter um padrão no IOs e no Android
const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 22
  : 64;

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <MotiView
        style={styles.content}
        from={{ translateY: -150, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: 'timing', duration: 800, delay: 300 }}
      >
        <MotiText
          style={styles.userName}
          from={{ translateX: -300 }}
          animate={{ translateX: 0 }}
          transition={{ type: 'timing', duration: 800, delay: 800 }}
        >
          {name}
        </MotiText>

        <TouchableOpacity activeOpacity={0.5} style={styles.buttonUser}>
          <Feather name="user" size={27} color="#FFF" />
        </TouchableOpacity>
      </MotiView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#32CD32',
    paddingTop: statusBarHeight,
    flexDirection: 'row',
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold',
  },
  buttonUser: {
    width: 44,
    heigth: 44,
    backgroundColor: 'rgba(255,255,255,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 44 / 2,
  },
});
