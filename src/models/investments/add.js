import firestore from '@react-native-firebase/firestore';

async function add(payload) {
  await firestore().collection('investments').add(payload);
}

export default add;
