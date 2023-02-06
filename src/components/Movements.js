import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { MotiView, MotiText, AnimatePresence } from 'moti';

const Movements = ({ movement }) => {
  const [showValue, setShowValue] = useState(false);
  return (
    <MotiView
      from={{ translateX: -300, opacity: 0 }}
      animate={{ translateX: 1, opacity: 1 }}
      transition={{ type: 'timing', duration: 900, delay: 900 }}
    >
      <TouchableOpacity
        style={styles.container}
        onPress={() => setShowValue(!showValue)}
      >
        <Text style={styles.data}>{movement.data}</Text>
        <View style={styles.content}>
          <Text style={styles.label}>{movement.label}</Text>
          {showValue ? (
            <AnimatePresence>
              <MotiText
                style={
                  movement.type === 1
                    ? styles.value.income
                    : styles.value.expenses
                }
                from={{ translateX: 300, opacity: 0 }}
                animate={{ translateX: 1, opacity: 1 }}
                transition={{ type: 'timing', duration: 900, delay: 150 }}
              >
                {movement.type === 1
                  ? `R$ ${movement.value}`
                  : `- R$ ${movement.value}`}
              </MotiText>
            </AnimatePresence>
          ) : (
            <AnimatePresence>
              <MotiView
                style={styles.skeleton}
                from={{ translateX: 300, opacity: 0 }}
                animate={{ translateX: 1, opacity: 1 }}
                transition={{ type: 'timing', duration: 900, delay: 150 }}
              >
                <Ionicons name="eye" size={14} />
              </MotiView>
            </AnimatePresence>
          )}
        </View>
      </TouchableOpacity>
    </MotiView>
  );
};

export default Movements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DADADA',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 8,
  },
  data: {
    color: '#DADADA',
    fontWeight: 'bold',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  value: {
    income: {
      fontSize: 16,
      color: '#2ecc71',
      fontWeight: 'bold',
    },
    expenses: {
      fontSize: 16,
      color: '#e74e3c',
      fontWeight: 'bold',
    },
  },
  skeleton: {
    marginTop: 6,
    width: 100,
    height: 15,
    backgroundColor: '#DADADA',
    borderRadius: 8,
    alignItems: 'center',
  },
});
