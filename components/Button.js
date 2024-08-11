import { StyleSheet, View, Text, Pressable, Alert } from 'react-native';

const Button = ({ theme, label, onPress }) => {
  const handlePress = (callback) => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  return (
    <View style={[styles.buttonContainer, { borderRadius: 18 }]}>
      <Pressable
        style={styles.primaryButton}
        onPress={() => handlePress(onPress)}
      >
        <Text style={[styles.text, { color: "#fff" }]}>{label}</Text>
      </Pressable>
    </View>
  );
};

// export default function Button({ label, theme, navigation }) {

  // const handlePress = (callback) => {
  //   callback();
  // };

  // if (theme === "primary") {
  //   return (
  //     <View style={[styles.buttonContainer, { borderRadius: 18 }]}>
  //       <Pressable
  //         style={styles.primaryButton}
  //         onPress={() => handlePress(onPress)}
  //         >
  //         <Text style={[styles.text, { color: "#fff" }]}>{label}</Text>
  //       </Pressable>
  //     </View>
  //   );
  // }

  // return (
  //   <View style={styles.buttonContainer}>
  //     <Pressable style={styles.button} onPress={handlePress}>
  //       <Text style={styles.buttonLabel}>{label}</Text>
  //     </Pressable>
  //   </View>
  // );
// }

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#fff',
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

export default Button;