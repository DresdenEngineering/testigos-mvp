import { StyleSheet, View, Text, Pressable, Alert } from 'react-native';

export default function Button({ label, theme, navigation }) {
  const handlePress = () => {
    Alert.alert('Button Pressed', 'You pressed the button!')
  };

  if (theme === "primary") {
    return (
      <View style={[styles.buttonContainer, { borderRadius: 18 }]}>
        <Pressable
          style={styles.primaryButton}
          onPress={handlePress}
        >
          <Text style={[styles.text, { color: "#fff" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#343a40',
    width: '100%',
    height: '100%',
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 16,
    color: '#343a40',
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});