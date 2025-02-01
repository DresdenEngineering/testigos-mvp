import { Alert } from 'react-native'; // Add this import

const createDID = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { // Dummy URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    });

    console.log(response);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    Alert.alert('DID Created', `DID Key: ${data.id}`);
  } catch (error) {
    Alert.alert('Error', error.message);
  }
};

export default createDID;