import firestore from '@react-native-firebase/firestore';

async function deleteById(id) {
  await firestore().collection('investments').doc(id).delete();
}

export default deleteById;
