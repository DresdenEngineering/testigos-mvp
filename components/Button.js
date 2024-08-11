import { StyleSheet, View, Text, Pressable, Alert } from 'react-native';

const Button = ({ theme, label, onPress }) => {
  const handlePress = (callback) => {
    if (typeof callback === 'function') {
      callback();
    }
  };

  const buttonStyle = theme === 'primary' ? styles.primaryButton : styles.secondaryButton;
  const textStyle = theme === 'primary' ? styles.primaryText : styles.secondaryText;

  return (
    <View style={[styles.buttonContainer, { borderRadius: 18 }]}>
      <Pressable
        style={buttonStyle}
        onPress={() => handlePress(onPress)}
      >
        <Text style={textStyle}>{label}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    // marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    // backgroundColor: '#fff',
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
    // borderWidth: 0,
  },
  secondaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 4,
    // elevation: 3,
    // color: '#000',
    backgroundColor: 'transparent',
    // width: '100%',
    // height: '100%',
    // borderWidth: 0,
  },
  primaryText: {
    color: '#fff',
    fontSize: 16,
  },
  secondaryText: {
    color: '#000',
    fontSize: 16,
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