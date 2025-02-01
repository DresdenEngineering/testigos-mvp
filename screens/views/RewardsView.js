import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';

const RewardsView = () => {
  const tokensEarned = 120; // Example number of tokens earned
  const transactions = [
    { id: '1', date: '2023-10-01', amount: 20, description: 'Enviado por partido político' },
    { id: '2', date: '2023-10-02', amount: 50, description: 'Recompensa por revisión de actas' },
    { id: '3', date: '2023-10-03', amount: 30, description: 'Segunda ronda de votación' },
    { id: '4', date: '2023-10-04', amount: 20, description: 'Saldo inicial' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionDate}>{item.date}</Text>
      <Text style={styles.transactionDescription}>{item.description}</Text>
      <Text style={styles.transactionAmount}>+{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rewards</Text>
      <Text style={styles.tokens}>{tokensEarned} Tokens</Text>

      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, styles.sendButton]}>
          <Text style={styles.buttonText}>Send</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.receiveButton]}>
          <Text style={styles.buttonText}>Receive</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.withdrawButton]}>
          <Text style={styles.buttonText}>Withdraw</Text>
        </Pressable>
      </View>

      <Text style={styles.subtitle}>Transactions</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={styles.transactionList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: "center",
    marginTop: 40,
  },
  tokens: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FF9900',
    marginBottom: 50,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButton: {
    backgroundColor: '#FF9900',
  },
  receiveButton: {
    backgroundColor: '#4CAF50',
  },
  withdrawButton: {
    backgroundColor: '#2196F3',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
  transactionList: {
    flex: 1,
  },
  transactionItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  transactionDate: {
    fontSize: 16,
    color: '#888',
  },
  transactionDescription: {
    fontSize: 16,
    marginVertical: 5,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF9900',
  },
});

export default RewardsView;