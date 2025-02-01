import React, { useState, useRef } from 'react';
import { 
  View, 
  StyleSheet, 
  Pressable, 
  Text, 
  SafeAreaView,
  StatusBar,
  Image
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const StartScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(null);

  const handleContinue = () => {
    const checkValid = phoneInput.current?.isValidNumber(phoneNumber);
    
    if (checkValid) {
      console.log('Valid phone:', formattedValue);
      // Navigate to verification screen or handle authentication
    } else {
      console.log('Invalid phone number');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/your-logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>Enter your phone number to get started</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Write your phone number</Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={phoneNumber}
            defaultCode="US"
            layout="first"
            onChangeText={setPhoneNumber}
            onChangeFormattedText={setFormattedValue}
            withDarkTheme
            withShadow
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.textInputContainer}
            textInputStyle={styles.textInput}
            codeTextStyle={styles.codeText}
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <Pressable 
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed
          ]}
          onPress={handleContinue}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>

        <Text style={styles.termsText}>
          By continuing, you agree to our{' '}
          <Text style={styles.termsLink}>Terms & Conditions</Text>
          {' '}and{' '}
          <Text style={styles.termsLink}>Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  phoneInputContainer: {
    width: '100%',
    borderRadius: 12,
    elevation: 2,
    backgroundColor: '#FFF',
  },
  textInputContainer: {
    borderRadius: 12,
    backgroundColor: '#F5F5F5',
  },
  textInput: {
    fontSize: 16,
    height: 50,
  },
  codeText: {
    fontSize: 16,
  },
  bottomContainer: {
    padding: 24,
    paddingBottom: 36,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonPressed: {
    backgroundColor: '#0056b3',
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  termsText: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
  },
  termsLink: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});

export default StartScreen;