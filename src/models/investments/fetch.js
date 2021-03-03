import firestore from '@react-native-firebase/firestore';

async function fetch(uid) {
  const investmentsRef = firestore()
    .collection('investments')
    .where('uid', '==', uid)
    .orderBy('date', 'desc');

  const collection = await investmentsRef.get();

  const data = collection.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
    date: doc.data().date.toDate(),
  }));

  return data;
}

export default fetch;
