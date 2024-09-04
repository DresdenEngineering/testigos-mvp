import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';
import { connect } from 'react-redux';
import * as Progress from 'react-native-progress';

const ProfileView = ({ userId, profilePictureUrl, profileCompleteness, name, bio }) => {
  return (
    <View style={styles.container}>
      <Image
        source={
          profilePictureUrl
            ? { uri: profilePictureUrl }
            : require('../../assets/images/logo.png')
        }
        style={styles.profileImage}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.bio}>{bio}</Text>
      <View style={styles.progressBarContainer}>
        <Text style={styles.progressText}>Profile Completeness</Text>
        <Progress.Bar
          progress={profileCompleteness}
          width={200}
          color="#3b5998"
          unfilledColor="#e0e0e0"
          borderWidth={0}
          borderRadius={5}
        />
      </View>
      <View style={styles.qrCodeContainer}>
        <SvgQRCode value={userId} size={150} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  progressBarContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  progressText: {
    fontSize: 16,
    marginBottom: 10,
  },
  qrCodeContainer: {
    marginTop: 20,
  },
});

// Map state to props
const mapStateToProps = (state) => ({
  userId: state.userId,
  profilePictureUrl: state.profilePictureUrl,
  profileCompleteness: state.profileCompleteness,
  name: state.name,
  bio: state.bio,
});

export default connect(mapStateToProps)(ProfileView);

// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import SvgQRCode from 'react-native-qrcode-svg';


// const ProfileView = () => {
//     const userId = 'user-unique-identifier'; // Replace with the actual user ID or any unique identifier


//   return (
//     <View style={styles.container}>
//         {/* <View style={styles.qrCodeContainer}>
//             <SvgQRCode value={userId} size={150} />
//         </View> */}
//         <Image
//             // source={{ uri: 'https://example.com/profile-picture.jpg' }} // Replace with actual profile picture URL
//             source={{ uri: '../assets/images/logo.png' }} // Replace with actual profile picture URL            
//             style={styles.profileImage}
//         />
//       <Text style={styles.name}>Pedro Pérez</Text>
//       <Text style={styles.bio}>Software Engineer at Example Corp. Loves coding, coffee, and cats.</Text>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   profileImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//     marginBottom: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   bio: {
//     fontSize: 16,
//     textAlign: 'center',
//     color: '#666',
//   },
// });

// export default ProfileView;