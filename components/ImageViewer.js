import { StyleSheet, Image, View } from 'react-native';

export default function ImageViewer({ logoSource }) {
  return (
    <View style={styles.imageWrapper}>
      <Image source={logoSource} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageWrapper: {
    // backgroundColor: 'lightgrey', // Temporary background color for debugging
    width: 320,
    height: 440,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    backgroundColor: 'lightgrey', // Temporary background color for debugging
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});